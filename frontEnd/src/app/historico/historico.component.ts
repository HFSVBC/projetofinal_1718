import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { CookieService } from 'angular2-cookie/core';
import { APIConnectorService } from '../service/apiconnector.service';
import { LoaderService } from '../loader/loader.service';
import { DataTableDirective } from 'angular-datatables';

import 'rxjs/add/operator/map';

class SearchOptions {
  edificio: string;
  piso: string;
  sala: string;
}

class HistAc {
  sala: string;
  inicio: string;
  fim: string;
}

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css'],
})

export class HistoricoComponent implements OnInit, AfterViewInit {
  token;
  @ViewChild(DataTableDirective)
  dtOptions: any = {};
  histAc: HistAc[] = [];
  dtTrigger: Subject<any> = new Subject();
  pisos = [];  salas = [];
  model = new SearchOptions();
  edificios; active = false; loader = false;
  dtElement: DataTableDirective;

  columnsToDisplay = ['Sala', 'Hora de Entrada', 'Hora de Saida'];

  constructor(public authService: AuthService, private router: Router, private _cookieService: CookieService,
     private apiconnector: APIConnectorService, private loaderService: LoaderService) {
  }

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 8,
      dom: 'Bfrtip',
      searching: false,
      buttons: [
        'copy', 'csv', 'excel', 'pdf', 'print'
      ]
    };
    this.dtTrigger.next();

    const url = this.apiconnector.getEdificios;
    const data = new FormData();

    this.token = data.append('userTokenId', this._cookieService.get('token'));

    this.apiconnector.postData(url, data).subscribe(res => {
      console.log('res', res);
      this._cookieService.put('token', res['data']['token']);
      this.edificios = res['data']['blocks']['data'];
      this.model.edificio = '1';
      this.edificioChanged();
    });
  }

    edificioChanged() {
      this.loaderService.show();
      const url = this.apiconnector.getPisosEdificio;
      const data = new FormData();

      this.token = data.append('userTokenId', this._cookieService.get('token'));
      data.append('block', this.model.edificio);

      this.apiconnector.postData(url, data).subscribe(res => {
        console.log('res', res);
        this._cookieService.put('token', res['data']['token']);
        this.pisos = res['data']['floors']['data'];
        this.model.piso = '1';
        this.loaderService.hide();
      });
    }

    pisoChanged() {
      this.loaderService.show();
      // const url = this.apiconnector.getSalasPisos;
      const url = this.apiconnector.getPisosEdificio;
      const data = new FormData();

      this.token = data.append('userTokenId', this._cookieService.get('token'));
      data.append('block', this.model.edificio);
      data.append('floor', this.model.piso);

      this.apiconnector.postData(url, data).subscribe(res => {
        console.log('res', res);
        this._cookieService.put('token', res['data']['token']);
        this.pisos = res['data']['floors']['data'];
        this.model.sala = '1';
        this.loaderService.hide();
      });
    }

    salaChanged() {
      console.log('cenas', this.model);
    }

    onSubmit() {
      this.loaderService.show();
      const url = this.apiconnector.historico;
      const data = new FormData();
      this.token = data.append('userTokenId', this._cookieService.get('token'));
      data.append('block', this.model.edificio);
      data.append('floor', this.model.piso);
      data.append('room', this.model.sala);

      this.apiconnector.postData(url, data).subscribe(res => {
        console.log('res', res);
        this._cookieService.put('token', res['data']['token']);
        this.extractData(res['data']['accessHist']);
        this.loaderService.hide();
      });
    }

    ngAfterViewInit() {
      this.dtTrigger.next();
    }

  private extractData(myDataArray) {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.histAc = myDataArray.data || {};
      this.dtTrigger.next();
    });
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
