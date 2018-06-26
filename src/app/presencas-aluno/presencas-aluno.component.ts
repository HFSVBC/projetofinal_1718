import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
// import { APIConnectorService, options } from '../service/apiconnector.service';
import { APIConnectorService } from '../service/apiconnector.service';
import { Subject } from 'rxjs/Subject';
import { DataTableDirective } from 'angular-datatables';
import { LoaderService } from '../loader/loader.service';
import { ResponseStatusValidatorService } from '../service/response-status-validator.service';
// import { CookieService } from 'angular2-cookie/core';
import { CookieService } from 'ngx-cookie-service';
// import { CookieService } from 'ngx-cookie';

class SearchOptions {
  aula: string;
  data: string;
}

class Presencas {
  course: string;
  attended: string;
}
@Component({
  selector: 'app-presencas-aluno',
  templateUrl: './presencas-aluno.component.html',
  styleUrls: ['./presencas-aluno.component.css']
})
export class PresencasAlunoComponent implements OnInit, AfterViewInit {
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  model = new SearchOptions();
  todasAulas; todasDatas; todosAlunos; token;
  dtTrigger: Subject<any> = new Subject();
  dtOptions: any = {};
  presencas: Presencas[] = [];
  loader = true;

  constructor(private _cookieService: CookieService, private apiconnector: APIConnectorService, private loaderService: LoaderService,
    private respVal: ResponseStatusValidatorService) {
  }

  ngOnInit() {
    this.loaderService.show();
    const url = this.apiconnector.getCoursesAluno;
    const data = new FormData();
    this.dtOptions = {
      pagingType: 'full_numbers',
      dom: 'Bfrtip',
      buttons: ['copy', 'csv', 'excel', 'pdf', 'print']};
    this.token = data.append('userTokenId', this._cookieService.get('token'));
    this.dtTrigger.next();

    this.apiconnector.postData(url, data).subscribe(res => {
      this.respVal.validate(res);

      console.log('res', res);
      // this._cookieService.put('token', res['data']['token']);
      this._cookieService.set('token', res['data']['token']);
      this.todasAulas = res['data']['studentCourses']['data'];
      this.model.aula = this.todasAulas[0]['id'];
      this.aulaChange();
    });
  }

  ngAfterViewInit() {
    this.dtTrigger.next();
  }

  aulaChange() {
    this.loader = true;
    const url = this.apiconnector.getDatasAulas + this.model.aula;
    const data = new FormData();
    this.token = data.append('userTokenId', this._cookieService.get('token'));

    this.apiconnector.postData(url, data).subscribe(res => {
      this.respVal.validate(res);

      console.log('res', res);
      this.model.data = 'null';
      // this._cookieService.put('token', res['data']['token']);
      this._cookieService.set('token', res['data']['token']);
      this.todasDatas = res['data']['classDates']['data'];
    });
  }

  onSubmit() {
    this.loaderService.show();
    const url = this.apiconnector.getPresencasAlunoAulas;
    const data = new FormData();
    this.token = data.append('userTokenId', this._cookieService.get('token'));
    data.append('course_id', this.model.aula);
    data.append('class_id', this.model.data);

    console.log('data', this.model.aula, this.model.data);

    this.apiconnector.postData(url, data).subscribe(res => {
      this.respVal.validate(res);

      console.log('res', res);
      // this._cookieService.put('token', res['data']['token']);
      this._cookieService.set('token', res['data']['token']);
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

}
