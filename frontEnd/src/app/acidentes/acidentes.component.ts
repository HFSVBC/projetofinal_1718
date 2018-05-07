import { Component, OnInit } from '@angular/core';

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

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log('Modelo', this.model);
  }

}
