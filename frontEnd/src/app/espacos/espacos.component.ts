import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { CookieService } from 'angular2-cookie/core';
import { APIConnectorService } from '../service/apiconnector.service';
import { LoaderService } from '../loader/loader.service';

class SearchOptions {
  edificio: string;
  piso: string;
  sala: string;
  data_inicio: Date;
  data_fim: Date;
}

class HistAc {
  sala: string;
  inicio: string;
  fim: string;
}
@Component({
  selector: 'app-espacos',
  templateUrl: './espacos.component.html',
  styleUrls: ['./espacos.component.css']
})
export class EspacosComponent implements OnInit {

  token;

  dtOptions: any = {};
  histAc: HistAc[] = [];
  dtTrigger: Subject<any> = new Subject();

  model = new SearchOptions();

  edificios_pisos = {
    'C1' : ['1', '2', '3', '4', '5'],
    'C2' : ['1', '2', '3', '4', '5'],
    'C3' : ['1', '2'],
    'C4' : ['1', '2'],
    'C5' : ['1', '2'],
    'C6' : ['1', '2', '3', '4', '5'],
    'C7' : ['1', '2'],
    'C8' : ['1', '2', '3', '4', '5'],
    };

  edificios_pisos_salas = {
    'C1.1' : ['1', '2', '3', '4', '5'],
    'C1.2' : ['1', '2', '3', '4', '5'],
    'C1.3' : ['1', '2', '3', '4', '5'],
    'C1.4' : ['1', '2', '3', '4', '5'],
    'C1.5' : ['1', '2', '3', '4', '5'],
    'C2.1' : ['1', '2', '3', '4', '5'],
    'C2.2' : ['1', '2', '3', '4', '5'],
    'C2.3' : ['1', '2', '3', '4', '5'],
    'C2.4' : ['1', '2', '3', '4', '5'],
    'C2.5' : ['1', '2', '3', '4', '5'],
    'C3.1' : ['1', '2', '3', '4', '5'],
    'C3.2' : ['1', '2', '3', '4', '5'],
    'C4.1' : ['1', '2', '3', '4', '5'],
    'C4.2' : ['1', '2', '3', '4', '5'],
    'C5.1' : ['1', '2', '3', '4', '5'],
    'C5.2' : ['1', '2', '3', '4', '5'],
    'C6.1' : ['1', '2', '3', '4', '5'],
    'C6.2' : ['1', '2', '3', '4', '5'],
    'C6.3' : ['1', '2', '3', '4', '5'],
    'C6.4' : ['1', '2', '3', '4', '5'],
    'C6.5' : ['1', '2', '3', '4', '5'],
    'C7.1' : ['1', '2', '3', '4', '5'],
    'C7.2' : ['1', '2', '3', '4', '5'],
    'C8.1' : ['1', '2', '3', '4', '5'],
    'C8.2' : ['1', '2', '3', '4', '5'],
    'C8.3' : ['1', '2', '3', '4', '5'],
    'C8.4' : ['1', '2', '3', '4', '5'],
    'C8.5' : ['1', '2', '3', '4', '5'],
    };

    edificios = Object.keys(this.edificios_pisos);
    pisos = [];
    salas = [];

  columnsToDisplay = ['Sala', 'Hora de Entrada', 'Hora de Saida'];

  constructor(public authService: AuthService, private router: Router, private _cookieService: CookieService,
     private apiconnector: APIConnectorService, private loaderService: LoaderService) {
  }

    edificioChanged() {
      console.log(this.model);
      this.pisos = this.edificios_pisos[this.model.edificio];
      console.log(this.pisos);
    }

    pisoChanged() {
      console.log(this.model);
      const ed_p = this.model.edificio + '.' + this.model.piso;
      this.salas = this.edificios_pisos_salas[ed_p];
    }

    salaChanged() {
      console.log(this.model);
    }

    onSubmit() {
      console.log('Form Data', this.model);
    }

  ngOnInit(): void {
    this.createTable();
  }

  createTable() {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10,
      dom: 'Bfrtip',
      searching: false,
      buttons: [
        'copy', 'csv', 'excel', 'pdf', 'print'
      ]
    };

    const url = this.apiconnector.historico;
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
    this.histAc = myDataArray.data || {};
    this.dtTrigger.next();
  }

}
