import { Component, OnInit } from '@angular/core';

class SalasDisp {
  edificio: string;
  piso: string;
  sala: string;
}

@Component({
  selector: 'app-salas',
  templateUrl: './salas.component.html',
  styleUrls: ['./salas.component.css']
})
export class SalasComponent implements OnInit {

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

  model = new SalasDisp();

  constructor() { }

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

  ngOnInit() {
  }

  onSubmit() {
    console.log('Modelo', this.model);
  }

}
