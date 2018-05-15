import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';
import { APIConnectorService } from '../service/apiconnector.service';
import { Subject } from 'rxjs/Subject';
import * as $ from 'jquery';
import '@fengyuanchen/datepicker';

class SearchOptions {
  aula: string;
  sala: string;
  aluno: string;
  data: string;
}

class Presencas {
  aluno: string;
  data: string;
  sala: string;
}


@Component({
  selector: 'app-presencas',
  templateUrl: './presencas.component.html',
  styleUrls: ['./presencas.component.css']
})
export class PresencasComponent implements OnInit {

  model = new SearchOptions();
  todasAulas = ['CSS', 'ITW', 'PGP'];
  todasSalas = {
    'CSS' : ['C1.1.23', 'C3.2.14'],
    'ITW' : ['C1.1.20', 'C8.2.47'],
    'PGP' : ['C1.2.10'],
    };
    salas = [];
    token;
    dtTrigger: Subject<any> = new Subject();
    dtOptions: any = {};
    presencas: Presencas[] = [];

  constructor(private _cookieService: CookieService, private apiconnector: APIConnectorService) {
    this.model = new SearchOptions();
  }

  ngOnInit() {
    $(document).ready(function() {
      (<any>$('[data-toggle="datepicker"]')).datepicker({
        endDate: new Date(),
      });
    });

    // faz o pedido a bd das aulas do user
    // todasAulas
  }

  aulaChange() {
    // faz o pedido a bd das salas da aula do user
    // salas
    this.salas = this.todasSalas[this.model.aula];
  }

  onSubmit() {
    console.log('Form Data', this.model);
    // Cria a tabela com as opcoesconst
    const url = this.apiconnector.presencas;
    const data = new FormData();
    this.token = data.append('userTokenId', this._cookieService.get('token'));

    this.apiconnector.postData(url, data)
      .subscribe(res => {
        console.log('res', res);
        this._cookieService.put('token', res['data']['token']);
        this.extractData(res['data']['accessHist']);
      });
  }

  private extractData(myDataArray) {
    this.presencas = myDataArray.data || {};
    this.dtTrigger.next();
  }

}
