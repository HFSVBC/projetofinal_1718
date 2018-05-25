import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';
import { APIConnectorService } from '../service/apiconnector.service';
import { Subject } from 'rxjs/Subject';
import { DataTableDirective } from 'angular-datatables';

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

  edificios_pisos; edificios; token;
  pisos = [];  salas = [];
  loader = false;
  active = false;
  @ViewChild(DataTableDirective)
  dtElement: DataTableDirective;
  dtTrigger: Subject<any> = new Subject();
  dtOptions: any = {};
  model = new SalasDisp();
  salasDisponiveis = new SalasDisponiveis();

  constructor(private _cookieService: CookieService, private apiconnector: APIConnectorService) {
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
      console.log('res', res);
      this._cookieService.put('token', res['data']['token']);

      this.pisos = res['data']['floors']['data'];
      console.log('pisos',  this.model.edificio, this.pisos);
    });
  }

  pisoChanged() {
    console.log(this.model);
  }

  onSubmit() {
    this.showLoader();
    const url = this.apiconnector.getLuagresDisponiveis;
    const data = new FormData();
    this.token = data.append('userTokenId', this._cookieService.get('token'));
    data.append('block', this.model.edificio);
    data.append('floor', this.model.piso);

    this.apiconnector.postData(url, data).subscribe(res => {
      console.log('res', res);
      this._cookieService.put('token', res['data']['token']);
      this.extractData(res['data']['availableRooms']);
    });
  }

  private extractData(myDataArray) {
    this.dtElement.dtInstance.then((dtInstance: DataTables.Api) => {
      dtInstance.destroy();
      this.salasDisponiveis = myDataArray.data || {};
      this.dtTrigger.next();
      this.hideLoader();
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

  private showLoader(): void {
    this.loader = true;
  }
  private hideLoader(): void {
    this.loader = false;
  }
}
