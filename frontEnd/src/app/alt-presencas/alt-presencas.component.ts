import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import '@fengyuanchen/datepicker';

class AltPresenca {
  nome: string;
  numero: string;
  aula: string;
  data: string;
}

@Component({
  selector: 'app-alt-presencas',
  templateUrl: './alt-presencas.component.html',
  styleUrls: ['./alt-presencas.component.css']
})
export class AltPresencasComponent implements OnInit {

  model = new AltPresenca();

  constructor() { }

  ngOnInit() {
    $(document).ready(function() {
      (<any>$('[data-toggle="datepicker"]')).datepicker({
        endDate: new Date(),
      });
    });
  }

  onSubmit() {
    console.log('Modelo', this.model);
  }

}
