import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { DataTablesModule } from 'angular-datatables';
import { CookieService } from 'angular2-cookie/core';

import 'rxjs/add/operator/map';

class SearchOptions {
  edificio: string;
  piso: string;
  sala: string;
  data_inicio: Date;
  data_fim: Date;
}

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})

export class HistoricoComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject();

  myDataArray = [
  {'data': '2016', 'hora': '12:24', 'sala': '1.2.15'},
  {'data': '2017', 'hora': '15:56', 'sala': '1.2.24'},
  {'data': '2017', 'hora': '10:11', 'sala': '1.2.22'},
  {'data': '2016', 'hora': '09:48', 'sala': '1.2.21'}
  ];

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

  columnsToDisplay = ['data', 'hora', 'sala'];

  constructor(public authService: AuthService, private router: Router, private _cookieService: CookieService) {
    // this.model = new SearchOptions();
  }

    // Rebuild the product list every time the product type changes.
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

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
  }

}
