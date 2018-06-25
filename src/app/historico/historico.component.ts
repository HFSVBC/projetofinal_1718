import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
// import { APIConnectorService, options } from '../service/apiconnector.service';
import { APIConnectorService } from '../service/apiconnector.service';
import { LoaderService } from '../loader/loader.service';
import { DataTableDirective } from 'angular-datatables';
import { ResponseStatusValidatorService } from '../service/response-status-validator.service';
import 'rxjs/add/operator/map';
import { CookieService } from 'angular2-cookie/core';
// import { CookieService } from 'ngx-cookie';

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
  dtElement: DataTableDirective;
  dtOptions: any = {};
  histAc: HistAc[] = [];
  dtTrigger: Subject<any> = new Subject();
  pisos = [];  salas = [];
  model = new SearchOptions();
  edificios; loader = true;

  constructor(public authService: AuthService, private router: Router, private _cookieService: CookieService,
     private apiconnector: APIConnectorService, private loaderService: LoaderService, private respVal: ResponseStatusValidatorService) {
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

    const url = this.apiconnector.getEdificios;
    const data = new FormData();

    this.token = data.append('userTokenId', this._cookieService.get('token'));

    this.apiconnector.postData(url, data).subscribe(res => {
      this.respVal.validate(res);

      console.log('res', res);
      // this._cookieService.put('token', res['data']['token'], options);~
      this._cookieService.put('token', res['data']['token']);
      this.edificios = res['data']['blocks']['data'];
      this.model.edificio = 'null';
      this.edificioChanged();
    });
  }

    edificioChanged() {
      this.loaderService.show();
      this.loader = true;
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
      this.loader = true;
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
        this.loader = false;
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
        this.respVal.validate(res);

        console.log('res', res);
        // this._cookieService.put('token', res['data']['token'], options);
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
}
