import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';
import { APIConnectorService } from '../service/apiconnector.service';
import { Subject } from 'rxjs/Subject';
import { DataTableDirective } from 'angular-datatables';

class SearchOptions {
  aula: string;
  sala: string;
  aluno: string;
  data: string;
}

class Presencas {
  student_id: string;
  student_name: string;
  date_ini: string;
  date_end: string;
}

@Component({
  selector: 'app-presencas',
  templateUrl: './presencas.component.html',
  styleUrls: ['./presencas.component.css']
})
export class PresencasComponent implements OnInit, AfterViewInit {
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  model = new SearchOptions();
  todasAulas;
  todasDatas;
  todosAlunos;
  salas = [];
  token;
  dtTrigger: Subject<any> = new Subject();
  // dtOptions: DataTables.Settings = {};
  dtOptions: any = {};

  presencas: Presencas[] = [];
  loader = false;

  constructor(private _cookieService: CookieService, private apiconnector: APIConnectorService) {
    this.model = new SearchOptions();
  }

  ngOnInit() {
    const url = this.apiconnector.getAulas;
    const data = new FormData();
    this.dtOptions = {
      pagingType: 'full_numbers',
      dom: 'Bfrtip',
      buttons: ['copy', 'csv', 'excel', 'pdf', 'print']};
    this.token = data.append('userTokenId', this._cookieService.get('token'));
    this.dtTrigger.next();

    this.apiconnector.postData(url, data).subscribe(res => {
      console.log('res', res);
      this._cookieService.put('token', res['data']['token']);
      this.todasAulas = res['data']['teacherSubjects']['data'];
      this.model.aula = this.todasAulas[0]['id'];
      this.aulaChange();
      console.log('data no pedido', this.model.aula, this.model.aluno, this.model.data);
    });
    // faz o pedido a bd das aulas do user
    // todasAulas
  }

  ngAfterViewInit() {
    this.dtTrigger.next();
  }

  aulaChange() {
    // faz o pedido a bd das salas da aula do user
    // salas
    console.log('aula id', this.model.aula);
    const url = this.apiconnector.getDatasAulas + this.model.aula;
    const data = new FormData();
    this.token = data.append('userTokenId', this._cookieService.get('token'));

    console.log('aula trocou', data);

    this.apiconnector.postData(url, data).subscribe(res => {
      console.log('res', res);
      this._cookieService.put('token', res['data']['token']);
      this.todasDatas = res['data']['classDates']['data'];
      this.loadStudents();
    });
  }
  loadStudents() {
    const url = this.apiconnector.getAlunosNomesAulas + this.model.aula;
    const data = new FormData();
    this.token = data.append('userTokenId', this._cookieService.get('token'));
    this.apiconnector.postData(url, data).subscribe(res => {
      console.log('res', res);
      this._cookieService.put('token', res['data']['token']);
      this.todosAlunos = res['data']['classStudents']['data'];
    });
  }
  onSubmit() {
    this.showLoader();
    // Cria a tabela com as opcoesconst
    const url = this.apiconnector.getAlunosAulas;
    const data = new FormData();
    this.token = data.append('userTokenId', this._cookieService.get('token'));
    data.append('course_id', this.model.aula);
    data.append('student_id', this.model.aluno);
    data.append('class_id', this.model.data);

    console.log('data', this.model.aula, this.model.aluno, this.model.data);

    this.apiconnector.postData(url, data).subscribe(res => {
      console.log('res', res);
      this._cookieService.put('token', res['data']['token']);
      this.extractData(res['data']['studentAttendance']);
    });
  }

  private extractData(myDataArray) {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.presencas = myDataArray.data || {};
      this.dtTrigger.next();
      this.hideLoader();
    });
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
