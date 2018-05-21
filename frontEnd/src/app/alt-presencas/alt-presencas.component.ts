import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';
import { APIConnectorService } from '../service/apiconnector.service';
import { Subject } from 'rxjs/Subject';
import { DataTableDirective } from 'angular-datatables';
import * as $ from 'jquery';

class AltPresenca {
  aluno: string;
  aula: string;
  data: string;
}

class Presencas {
  student_id: string;
  student_name: string;
  date_ini: string;
  date_end: string;
}

@Component({
  selector: 'app-alt-presencas',
  templateUrl: './alt-presencas.component.html',
  styleUrls: ['./alt-presencas.component.css']
})
export class AltPresencasComponent implements OnInit, AfterViewInit {
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  token;
  todasAulas;
  todasDatas;
  loader = false;
  active = false;
  model = new AltPresenca();
  dtTrigger: Subject<any> = new Subject();
  // dtOptions: DataTables.Settings = {};
  dtOptions: any = {};
  presencas = new Presencas();

  constructor(private _cookieService: CookieService, private apiconnector: APIConnectorService) {
    this.model.aluno = '';
  }

  ngOnInit() {
    const url = this.apiconnector.getAulas;
    const data = new FormData();
    this.token = data.append('userTokenId', this._cookieService.get('token'));
    this.dtOptions = {
      pagingType: 'full_numbers',
      dom: 'Bfrtip',
      buttons: [
        {extend: 'copy', exportOptions: {columns: [0, 1, 2, 3]}},
        {extend: 'csv', exportOptions: {columns: [0, 1, 2, 3]}},
        {extend: 'print', exportOptions: {columns: [0, 1, 2, 3]}}
      ],
      columnDefs: [
        {'width': '50px', 'targets' : -1},
        {'orderable': false, 'targets' : -1},
        {'visible': false, 'targets': -2}
      ]
    };
    this.dtTrigger.next();

    this.apiconnector.postData(url, data).subscribe(res => {
      console.log('res', res);
      this._cookieService.put('token', res['data']['token']);
      this.todasAulas = res['data']['teacherSubjects']['data'];
      this.model.aula = this.todasAulas[0]['id'];
      this.aulaChange();
    });
  }
  ngAfterViewInit() {
    this.dtTrigger.next();
  }
  onSubmit() {
    this.showLoader();
    const url = this.apiconnector.getAulasDeUmAluno;
    const data = new FormData();
    this.token = data.append('userTokenId', this._cookieService.get('token'));
    data.append('course_id', this.model.aula);
    data.append('student_id', this.model.aluno);
    data.append('class_id', this.model.data);

    this.apiconnector.postData(url, data).subscribe(res => {
      console.log('res', res);
      this._cookieService.put('token', res['data']['token']);
      console.log('studant', res['data']['studentAttendance']);
      this.extractData(res['data']['studentAttendance']);
      this.hideLoader();
    });
  }

  private extractData(myDataArray) {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.presencas = myDataArray.data || {};
      this.dtTrigger.next();
      this.hideLoader();
      // $(document).ready(function() {
      //   (<any>$('[data-toggle="tooltip"]')).tooltip();
      // });
    });

  }

  aulaChange() {
    console.log('aula id', this.model.aula);
    const url = this.apiconnector.getDatasAulas + this.model.aula;
    const data = new FormData();
    this.token = data.append('userTokenId', this._cookieService.get('token'));

    console.log('aula trocou', data);

    this.apiconnector.postData(url, data).subscribe(res => {
      console.log('res', res);
      this._cookieService.put('token', res['data']['token']);
      this.todasDatas = res['data']['classDates']['data'];
    });
  }

  alterarPresenca() {

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

  private showLoader(): void {
    // console.log('Show loader');
    this.loader = true;
  }
  private hideLoader(): void {
    // console.log('Hide loader');
    this.loader = false;
  }

}
