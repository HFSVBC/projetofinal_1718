import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})

export class HistoricoComponent implements OnInit {

  myDataArray = [
  {'data': "12/03/2016", 'hora': "12:24", 'sala': "1.2.15"},
  {'data': "05/06/2017", 'hora': "15:56", 'sala': "1.2.24"},
  {'data': "24/05/2017", 'hora': "10:11", 'sala': "1.2.22"},
  {'data': "14/04/2016", 'hora': "9:48", 'sala': "1.2.21"}
  ];

  columnsToDisplay = ['data', 'hora', 'sala'];
  constructor() { }

  ngOnInit() {
  }

}
