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

  model = new SearchOptions();
  todasAulas = ['CSS', 'ITW', 'PGP'];
  todasSalas = {
    'CSS' : ['C1.1.23', 'C3.2.14'],
    'ITW' : ['C1.1.20', 'C8.2.47'],
    'PGP' : ['C1.2.10'],
    };
    salas = [];

  constructor(private _cookieService: CookieService) {
    this.model = new SearchOptions();
  }

  ngOnInit() {
  }

  aulaChange() {
    console.log(this.model);
    this.salas = this.todasSalas[this.model.aula];
  }

  onSubmit() {
    console.log('Form Data', this.model);
  }

}
