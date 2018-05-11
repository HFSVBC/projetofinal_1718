import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import * as $ from 'jquery';
import '@fengyuanchen/datepicker';

class Acidente {
  tipo: string;
  espaco: string;
  // date: Date;
  data: string;
  descricao: string;
}

@Component({
  selector: 'app-acidentes',
  templateUrl: './acidentes.component.html',
  styleUrls: ['./acidentes.component.css']
})

export class AcidentesComponent implements OnInit {
  model = new Acidente();
  tipos = ['Perda', 'Furto', 'Incêndio', 'Inundação', 'Outro'];
  a = 'T';
  acidenteForm;

  constructor() { }

  ngOnInit() {
    this.acidenteForm = new FormGroup({
      'tipo': new FormControl(this.model.tipo, Validators.required),
      'espaco': new FormControl(this.model.espaco, Validators.pattern('[1-8].[1-5].[1-9]*')),
      'data': new FormControl(this.model.data, Validators.required)
    });
    $(document).ready(function(){
      (<any>$('[data-toggle="datepicker"]')).datepicker({
        endDate: new Date(),
      });
    });
  }
  
  newModel() {
    this.model = new Acidente();
    console.log('Modelo', this.model);
  }

  onSubmit() {
    console.log('Modelo', this.model);
  }

}
