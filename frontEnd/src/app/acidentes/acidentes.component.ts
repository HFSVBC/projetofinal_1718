import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as $ from 'jquery';
import { APIConnectorService, options } from '../service/apiconnector.service';
import { ResponseStatusValidatorService } from '../service/response-status-validator.service';
import { LoaderService } from '../loader/loader.service';
import { AlertService } from '../alerts/alert.service';
import '@fengyuanchen/datepicker';
// import { CookieService } from 'angular2-cookie/core';
import { CookieService } from 'ngx-cookie';

class Acidente {
  tipo: string;
  edificio: string;
  sala: string;
  piso: string;
  data: string;
  descricao: string;
}

class ConsularAcidente {
  tipo: string;
  edificio: string;
  sala: string;
  piso: string;
  data_ini: string;
  data_fim: string;
}

@Component({
  selector: 'app-acidentes',
  templateUrl: './acidentes.component.html',
  styleUrls: ['./acidentes.component.css']
})

export class AcidentesComponent implements OnInit {
  model = new Acidente(); model1 = new ConsularAcidente();
  tipos = ['Perda', 'Furto', 'Incêndio', 'Inundação', 'Outro'];
  a = 'T';
  acidenteForm; token;
  edificios = []; pisos = []; salas = [];
  loader = false; active = false;
  showAcidentes = false;

  acidentes = [{
    id: '1',
    tipo: 'Incendio',
    edificio: '6',
    sala: '3',
    piso: '38',
    data: '09-05-2018',
    descricao: 'Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon offici' +
     'aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqu' +
     'put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes ' +
     'anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table'
  }, {
    id: '2',
    tipo: 'Incendio',
    edificio: '3',
    sala: '2',
    piso: '14',
    data: '10-04-2018',
    descricao: 'Cenas que aconteceram'
  }];

  constructor(private apiconnector: APIConnectorService,  private respVal: ResponseStatusValidatorService,
      private _cookieService: CookieService, private loaderService: LoaderService, private alertService: AlertService) { }

  ngOnInit() {
    $(document).ready(function() {
      (<any>$('#na_data')).datepicker({
        endDate: new Date(),
        format: 'dd-mm-yyyy',
      });
    });
    this.model.tipo = '';
    this.model.descricao = '';
    this.model.data = '';

    const url = this.apiconnector.getEdificios;
    const data = new FormData();
    this.token = data.append('userTokenId', this._cookieService.get('token'));

    this.apiconnector.postData(url, data).subscribe(res => {
      this.respVal.validate(res);

      this._cookieService.put('token', res['data']['token'], options);

      this.edificios = res['data']['blocks']['data'];
      this.model.edificio = res['data']['blocks']['data'][0]['bloco'];

      this.edificioChanged();
    });
  }

  edificioChanged() {
    const url = this.apiconnector.getPisosEdificio;
    const data = new FormData();
    this.token = data.append('userTokenId', this._cookieService.get('token'));
    data.append('block', this.model.edificio);

    this.apiconnector.postData(url, data).subscribe(res => {
      this.respVal.validate(res);

      this._cookieService.put('token', res['data']['token'], options);

      this.pisos = res['data']['floors']['data'];
      this.model.piso = res['data']['floors']['data'][0]['piso'];

      this.pisoChanged();
    });
  }

  pisoChanged() {
    const url = this.apiconnector.getSalasPisos;
    const data = new FormData();

    this.token = data.append('userTokenId', this._cookieService.get('token'));
    data.append('block', this.model.edificio);
    data.append('floor', this.model.piso);

    this.apiconnector.postData(url, data).subscribe(res => {
      this.respVal.validate(res);

      this._cookieService.put('token', res['data']['token'], options);
      this.salas = res['data']['rooms']['data'];
      console.log('cenas', res['data']['rooms']['data']);
      this.model.sala = res['data']['rooms']['data'][0]['sala'];
    });
  }

  dataChanged() {
    this.model.data = (<any>$('#na_data')).datepicker('getDate', true);
  }

  newModel() {
    this.model.tipo = '';
    this.model.data = '';
    this.model.descricao = '';
    this.verify([this.model.data, this.model.tipo, this.model.descricao]);
    console.log('Modelo', this.model);
  }

  onSubmit() {
    console.log('Modelo', this.model);
    this.loaderService.show();

    const url = this.apiconnector.getAulasDeUmAluno;

    const data = new FormData();
    this.token = data.append('userTokenId', this._cookieService.get('token'));
    data.append('type', this.model.tipo);
    data.append('block', this.model.edificio);
    data.append('floor', this.model.piso);
    data.append('room', this.model.sala);
    data.append('date', this.model.data);
    data.append('description', this.model.descricao);

    this.apiconnector.postData(url, data).subscribe(res => {
      this.respVal.validate(res);

      this.alertService.show('Acidente criado com sucesso!', 'success');

      console.log('res', res);
      this._cookieService.put('token', res['data']['token'], options);
      this.loaderService.hide();
    });
  }

  onSubmit1() {
    (<any>$('#collapseOne')).removeClass('show');
    (<any>$('#collapseTwo')).removeClass('show');
    this.showAcidentes = true;
    (<any>$('#collapse1')).addClass('show');
    // console.log('Modelo', this.model);
    // this.loaderService.show();

    // const url = this.apiconnector.getAulasDeUmAluno;
    // const data = new FormData();

    // this.token = data.append('userTokenId', this._cookieService.get('token'));
    // data.append('type', this.model1.tipo);
    // data.append('block', this.model1.edificio);
    // data.append('floor', this.model1.piso);
    // data.append('room', this.model1.sala);
    // data.append('date_ini', this.model1.data_ini);
    // data.append('date_end', this.model1.data_fim);

    // this.apiconnector.postData(url, data).subscribe(res => {
    //   this.respVal.validate(res);

    //   this.alertService.show('Acidente criado com sucesso!', 'success');

    //   console.log('res', res);
    //   this._cookieService.put('token', res['data']['token']);
    //   this.loaderService.hide();
    // });
  }

  verify(field) {
    console.log('model', this.model);
    let act = false;
    for (const f in field) {
      if (field[f].length === 0 && field[f] === '') {
        act = true;
      }
    }
    act ? this.active = ! 1 : this.active = ! 0;
  }
}
