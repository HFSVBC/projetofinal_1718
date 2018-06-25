import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { APIConnectorService, options } from '../service/apiconnector.service';
import { Subject } from 'rxjs/Subject';
import { DataTableDirective } from 'angular-datatables';
import { LoaderService } from '../loader/loader.service';
import { ResponseStatusValidatorService } from '../service/response-status-validator.service';
import { CookieService } from 'angular2-cookie/core';
// import { CookieService } from 'ngx-cookie';

class SalasDisp {
  edificio: string;
  piso: string;
}

class SalasDisponiveis {
  space: string;
  seats: string;
}

@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.css']
})
export class SalasComponent implements OnInit, AfterViewInit {
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  edificios_pisos; edificios; token;
  pisos = [];  salas = [];
  dtTrigger: Subject<any> = new Subject();
  dtOptions: any = {};
  model = new SalasDisp();
  salasDisponiveis = new SalasDisponiveis();
  loader = true;

  constructor(private _cookieService: CookieService, private apiconnector: APIConnectorService, private loaderService: LoaderService,
    private respVal: ResponseStatusValidatorService) {
    this.model.piso = '';
  }

  ngOnInit() {
    this.loaderService.show();
    const url = this.apiconnector.getEdificios;
    const data = new FormData();
    this.token = data.append('userTokenId', this._cookieService.get('token'));
    this.dtOptions = {
      pagingType: 'full_numbers',
      dom: 'Bfrtip'
      };
    this.dtTrigger.next();

    this.apiconnector.postData(url, data).subscribe(res => {
      this.respVal.validate(res);

      console.log('res', res);
      // this._cookieService.put('token', res['data']['token'], options);
      this._cookieService.put('token', res['data']['token']);
      this.edificios = res['data']['blocks']['data'];
      this.model.edificio = '1';
      this.edificioChanged();
    });
  }

  ngAfterViewInit() {
    this.dtTrigger.next();
  }

  edificioChanged() {
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
      this.loader = false;
      this.loaderService.hide();
    });
  }

  onSubmit() {
    this.loaderService.show();
    const url = this.apiconnector.getLugaresDisponiveis;
    const data = new FormData();
    this.token = data.append('userTokenId', this._cookieService.get('token'));
    data.append('block', this.model.edificio);
    data.append('floor', this.model.piso);

    this.apiconnector.postData(url, data).subscribe(res => {
      this.respVal.validate(res);

      console.log('res', res);
      // this._cookieService.put('token', res['data']['token'], options);
      this._cookieService.put('token', res['data']['token']);
      console.log('cenas', res['data']['availableRooms']['data']);
      this.extractData(res['data']['availableRooms']);
      this.loaderService.hide();
    });
  }

  private extractData(myDataArray) {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.salasDisponiveis = myDataArray.data || {};
      this.dtTrigger.next();
    });
  }
}
