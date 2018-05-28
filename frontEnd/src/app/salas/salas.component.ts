import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';
import { APIConnectorService } from '../service/apiconnector.service';
import { Subject } from 'rxjs/Subject';
import { DataTableDirective } from 'angular-datatables';
import { LoaderService } from '../loader/loader.service';

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
  edificios_pisos; edificios; token;
  pisos = [];  salas = [];
  dtElement: DataTableDirective;
  dtTrigger: Subject<any> = new Subject();
  dtOptions: any = {};
  model = new SalasDisp();
  salasDisponiveis = new SalasDisponiveis();

  constructor(private _cookieService: CookieService, private apiconnector: APIConnectorService, private loaderService: LoaderService) {
    this.model.piso = '';
  }

  ngOnInit() {
    const url = this.apiconnector.getEdificios;
    const data = new FormData();

    this.dtOptions = {
      pagingType: 'full_numbers',
      };

    this.token = data.append('userTokenId', this._cookieService.get('token'));
    this.dtTrigger.next();

    this.apiconnector.postData(url, data).subscribe(res => {
      console.log('res', res);
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

  onSubmit() {
    this.loaderService.show();
    const url = this.apiconnector.getLugaresDisponiveis;
    const data = new FormData();
    this.token = data.append('userTokenId', this._cookieService.get('token'));
    data.append('block', this.model.edificio);
    data.append('floor', this.model.piso);

    this.apiconnector.postData(url, data).subscribe(res => {
      console.log('res', res);
      this._cookieService.put('token', res['data']['token']);
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
