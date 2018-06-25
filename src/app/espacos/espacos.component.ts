import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { APIConnectorService, options } from '../service/apiconnector.service';
import { LoaderService } from '../loader/loader.service';
import { DataTableDirective } from 'angular-datatables';
import { ResponseStatusValidatorService } from '../service/response-status-validator.service';
// import { CookieService } from 'angular2-cookie/core';
import { CookieService } from 'ngx-cookie';

class SpaceInfo {
  space: string;
  people: string;
  max: string;
}

class SearchOptions {
  edificio: string;
  piso: string;
  sala: string;
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

    const url = this.apiconnector.getEdificios;
    const data = new FormData();

    this.token = data.append('userTokenId', this._cookieService.get('token'));

    this.apiconnector.postData(url, data).subscribe(res => {
      this.respVal.validate(res);

      console.log('res', res);
      this._cookieService.put('token', res['data']['token'], options);
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
    this.loader = true;
    const url = this.apiconnector.getPisosEdificio;
    const data = new FormData();

    this.token = data.append('userTokenId', this._cookieService.get('token'));
    data.append('block', this.model.edificio);

    this.apiconnector.postData(url, data).subscribe(res => {
      this.respVal.validate(res);

      console.log('res', res);
      this._cookieService.put('token', res['data']['token'], options);
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
      this._cookieService.put('token', res['data']['token'], options);
      this.salas = res['data']['rooms']['data'];
      this.model.sala = 'null';
      this.loader = false;
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

    this.apiconnector.postData(url, data).subscribe(res => {
      this.respVal.validate(res);

      console.log('res', res);
      this._cookieService.put('token', res['data']['token'], options);
      this.extractData(res['data']['accessHist']);
      this.loaderService.hide();
    });
  }

}
