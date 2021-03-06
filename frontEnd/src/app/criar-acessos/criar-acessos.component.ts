import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';
import 'bootstrap';
import { ResponseStatusValidatorService } from '../service/response-status-validator.service';
import { CookieService } from 'angular2-cookie/core';
// import { CookieService } from 'ngx-cookie';

class Acesso {
  nome_responsavel: string;
  numero_responsavel: number;
  contacto_responsavel: number;
  email_responsavel: string;
  nome_visitante: string;
  cc_visitante: number;
  contacto_visitante: number;
  email_visitante: string;
  num_pessoas: number;
  data_entrada: string;
  data_saida: string;
  motivo: string;
  descricao: string;
}
@Component({
  selector: 'app-criar-acessos',
  templateUrl: './criar-acessos.component.html',
  styleUrls: ['./criar-acessos.component.css']
})
export class CriarAcessosComponent implements OnInit {

  model = new Acesso;

  constructor(private respVal: ResponseStatusValidatorService) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('modelo', this.model);
  }

  next1() {
    console.log((<any>$('#nav-visitor-tab')));
    (<any>$('#nav-visitor-tab')).tab('show');
  }

  next2() {
    (<any>$('#nav-contact-tab')).tab('show');
  }


}
