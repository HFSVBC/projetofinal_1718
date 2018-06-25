import { Component, OnInit } from '@angular/core';
import { ResponseStatusValidatorService } from '../service/response-status-validator.service';


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

}
