import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';

class SearchOptions {
  aula: string;
  sala: string;
  aluno: string;
  data_inicio: Date;
  data_fim: Date;
}

@Component({
  selector: 'app-presencas',
  templateUrl: './presencas.component.html',
  styleUrls: ['./presencas.component.css']
})
export class PresencasComponent implements OnInit {

  model;
  aulas = [];
  salas = [];

  constructor(private _cookieService: CookieService) {
    this.model = new SearchOptions();
  }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Form Data', this.model);
  }

}
