import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
// import { APIConnectorService, options } from '../service/apiconnector.service';
import { APIConnectorService } from '../service/apiconnector.service';
import { LoaderService } from '../loader/loader.service';
import { Subject } from 'rxjs/Subject';
import { DataTableDirective } from 'angular-datatables';
import * as $ from 'jquery';
import { ResponseStatusValidatorService } from '../service/response-status-validator.service';
// import { CookieService } from 'angular2-cookie/core';
import { CookieService } from 'ngx-cookie-service';
// import { CookieService } from 'ngx-cookie';

class AltPresenca {
  aluno: string;
  aula: string;
  data: string;
}

class Presencas {
  student_id: string;
  student_name: string;
  date_ini: string;
  aula_id: string;
}

@Component({
  selector: 'app-alt-presencas',
  templateUrl: './alt-presencas.component.html',
  styleUrls: ['./alt-presencas.component.css']
})
export class AltPresencasComponent implements OnInit, AfterViewInit {
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  token; todasAulas; todasDatas;
  loader = false;
  active = false;
  model = new AltPresenca();
  dtTrigger: Subject<any> = new Subject();
  dtOptions: any = {};
  presencas = new Presencas();
  student_id; aula_id; date_id; state_now; ErroAlterar;
  alterarLoader = false;

  constructor(private _cookieService: CookieService, private apiconnector: APIConnectorService,
     private loaderService: LoaderService, private respVal: ResponseStatusValidatorService) {

  }

  ngOnInit() {
    const url = this.apiconnector.getAulas;
    const data = new FormData();
    this.token = data.append('userTokenId', this._cookieService.get('token'));
    this.dtOptions = {
      pagingType: 'full_numbers',
      dom: 'Bfrtip',
      buttons: [
        {extend: 'copy', exportOptions: {columns: [0, 1, 2, 4]}},
        {extend: 'csv', exportOptions: {columns: [0, 1, 2, 4]}},
        {extend: 'print', exportOptions: {columns: [0, 1, 2, 4]}}
      ],
      columnDefs: [
        {'width': '50px', 'targets' : -1},
        {'orderable': false, 'targets' : -1},
        {'visible': false, 'targets': -2},
        {'visible': false, 'targets': -3}
      ]
    };
    this.dtTrigger.next();

    this.apiconnector.postData(url, data).subscribe(res => {
      this.respVal.validate(res);

      console.log('res', res);
      // this._cookieService.put('token', res['data']['token'], options);
      this._cookieService.set('token', res['data']['token']);
      this.todasAulas = res['data']['teacherSubjects']['data'];
      this.model.aula = this.todasAulas[0]['id'];
      this.aulaChange();
    });
  }
  ngAfterViewInit() {
    this.dtTrigger.next();
  }

  onSubmit() {
    this.loaderService.show();

    const url = this.apiconnector.getAulasDeUmAluno;
    const data = new FormData();
    this.token = data.append('userTokenId', this._cookieService.get('token'));
    data.append('course_id', this.model.aula);
    data.append('student_id', this.model.aluno);
    data.append('class_id', this.model.data);

    this.apiconnector.postData(url, data).subscribe(res => {
      this.respVal.validate(res);

      console.log('res', res);
      // this._cookieService.put('token', res['data']['token'], options);
      this._cookieService.set('token', res['data']['token']);
      console.log('studant', res['data']['studentAttendance']);
      this.extractData(res['data']['studentAttendance']);
      this.loaderService.hide();
    });
  }

  private extractData(myDataArray) {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.presencas = myDataArray.data || {};
      this.dtTrigger.next();
    });
  }

  aulaChange() {
    console.log('aula id', this.model.aula);
    const url = this.apiconnector.getDatasAulas + this.model.aula;
    const data = new FormData();
    this.token = data.append('userTokenId', this._cookieService.get('token'));

    this.apiconnector.postData(url, data).subscribe(res => {
      this.respVal.validate(res);

      console.log('res', res);
      // this._cookieService.put('token', res['data']['token'], options);
      this._cookieService.set('token', res['data']['token']);
      this.todasDatas = res['data']['classDates']['data'];
      this.model.data = 'null';
    });
  }

  alterarPresenca() {
    const url = this.apiconnector.changeAulasDeUmAluno;
    const data = new FormData();
    this.token = data.append('userTokenId', this._cookieService.get('token'));
    data.append('student_id', this.student_id);
    data.append('class_id', this.aula_id);
    data.append('state_now', this.state_now);

    this.alterarLoader = true;

    this.apiconnector.postData(url, data).subscribe(res => {
      this.respVal.validate(res);

      console.log('res', res);
      // this._cookieService.put('token', res['data']['token'], options);
      this._cookieService.set('token', res['data']['token']);
      this.ErroAlterar = (res['data']['changeStudentAttendance']);
      this.onSubmit();
      this.alterarLoader = false;
    });
  }

  clickModal(student, date, aula, state) {
    this.student_id = student;
    this.aula_id = aula;
    this.date_id = date;
    this.state_now = state;
  }

  verify(field) {
    let act = false;
    for (const f in field) {
      if (field[f].length === 0 && field[f] === '') {
        act = true;
      }
    }
    act ? this.active = ! 1 : this.active = ! 0;
  }
}
