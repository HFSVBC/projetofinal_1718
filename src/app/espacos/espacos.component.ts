import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { APIConnectorService, options } from '../service/apiconnector.service';
import { LoaderService } from '../loader/loader.service';
import { DataTableDirective } from 'angular-datatables';
import { ResponseStatusValidatorService } from '../service/response-status-validator.service';
import { CookieService } from 'angular2-cookie/core';
// import { CookieService } from 'ngx-cookie';
import '@fengyuanchen/datepicker';

class SpaceInfo {
  space: string;
  people: string;
  max: string;
}

class SearchOptions {
  edificio: string;
  piso: string;
  sala: string;
  data_ini: string;
  hora_ini: string;
  hora_fim: string;
}

@Component({
  selector: 'app-espacos',
  templateUrl: './espacos.component.html',
  styleUrls: ['./espacos.component.css']
})
export class EspacosComponent implements OnInit, AfterViewInit {

  token;
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtOptions: any = {};
  si: SpaceInfo[] = [];
  dtTrigger: Subject<any> = new Subject();
  pisos = [];  salas = [];
  edificios; loader = true;
  model = new SearchOptions();
  horas = ['0:00', '0:30', '1:00', '1:30', '2:00', '2:30', '3:00', '3:30', '4:00', '4:30',
  '5:00', '5:30', '6:00', '6:30', '7:00', '7:30', '8:00', '8:30', '9:00', '9:30', '10:00',
   '10:30', '11:00', '11:30', '12:00', '12:30', '13:00', '13:30', '14:00', '14:30', '15:00',
    '15:30', '16:00', '16:30', '17:00', '17:30', '18:00', '18:30', '19:00', '19:30', '20:00',
     '20:30', '21:00', '21:30', '22:00', '22:30', '23:00', '23:30'];
  horas_fim = [];

  constructor(public authService: AuthService, private router: Router, private _cookieService: CookieService,
    private apiconnector: APIConnectorService, private loaderService: LoaderService,
    private respVal: ResponseStatusValidatorService) {
    }

  ngOnInit(): void {
    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 8,
      dom: 'Bfrtip',
      buttons: [
        'copy', 'csv', 'excel', 'pdf', 'print'
      ]
    };
    this.dtTrigger.next();

    this.model.hora_ini = this.horas[0];
    this.hora_iniChange();

    $(document).ready(function() {
      (<any>$()).on('hide.datepicker', function (e) {
        console.log('eventdate', e.date);
        this.model.data_ini = e.date;
      });
      (<any>$('#na_data_ini')).datepicker({
        endDate: new Date(),
        format: 'yyyy-mm-dd',
      });
    });

    const url = this.apiconnector.getEdificios;
    const data = new FormData();

    this.token = data.append('userTokenId', this._cookieService.get('token'));

    this.apiconnector.postData(url, data).subscribe(res => {
      this.respVal.validate(res);

      console.log('res', res);
      // this._cookieService.put('token', res['data']['token'], options);
      this._cookieService.put('token', res['data']['token']);
      this.edificios = res['data']['blocks']['data'];
      this.model.edificio = 'null';
      this.edificioChanged();
    });
  }

  ngAfterViewInit() {
    this.dtTrigger.next();
  }

  edificioChanged() {
    this.loaderService.show();
    const url = this.apiconnector.getPisosEdificio;
    const data = new FormData();

    this.token = data.append('userTokenId', this._cookieService.get('token'));
    data.append('block', this.model.edificio);

    this.apiconnector.postData(url, data).subscribe(res => {
      this.respVal.validate(res);

      console.log('res', res);
      // this._cookieService.put('token', res['data']['token'], options);
      this._cookieService.put('token', res['data']['token']);
      this.pisos = res['data']['floors']['data'];
      this.model.piso = 'null';
      this.pisoChanged();
      this.loaderService.hide();
    });
  }

  pisoChanged() {
    this.loaderService.show();
    const url = this.apiconnector.getSalasPisos;
    const data = new FormData();

    this.token = data.append('userTokenId', this._cookieService.get('token'));
    data.append('block', this.model.edificio);
    data.append('floor', this.model.piso);

    this.apiconnector.postData(url, data).subscribe(res => {
      this.respVal.validate(res);

      console.log('res', res);
      // this._cookieService.put('token', res['data']['token'], options);
      this._cookieService.put('token', res['data']['token']);
      this.salas = res['data']['rooms']['data'];
      this.model.sala = 'null';
      this.loaderService.hide();
    });
  }

  private extractData(myDataArray) {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.si = myDataArray.data || {};
      this.dtTrigger.next();
    });
  }

  salaChanged() {
    console.log('cenas', this.model);
  }

  onSubmit() {
    this.loaderService.show();
    const url = this.apiconnector.getPessoasEspaco;
    const data = new FormData();
    this.token = data.append('userTokenId', this._cookieService.get('token'));
    data.append('block', this.model.edificio);
    data.append('floor', this.model.piso);
    data.append('room', this.model.sala);
    data.append('data_ini', this.model.data_ini);
    data.append('hora_ini', this.model.hora_ini);
    data.append('hora_fim', this.model.hora_fim);

    console.log('Modelo', this.model);

    this.apiconnector.postData(url, data).subscribe(res => {
      this.respVal.validate(res);

      console.log('res', res);
      // this._cookieService.put('token', res['data']['token'], options);
      this._cookieService.put('token', res['data']['token']);
      this.extractData(res['data']['accessHist']);
      this.loaderService.hide();
    });
  }

  dataChanged() {
    this.model.data_ini = (<any>$('#na_data_ini')).datepicker('getDate', true);
    this.loader = false;
  }

  hora_iniChange() {
    this.horas_fim = this.horas.slice(this.horas.indexOf(this.model.hora_ini) + 1);
    this.model.hora_fim = this.horas_fim[0];
  }

}
