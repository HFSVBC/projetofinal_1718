import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';
import { Http, Response } from '@angular/http';
import { Subject } from 'rxjs/Subject';
import { DataTablesModule } from 'angular-datatables';

import 'rxjs/add/operator/map';

class Person {
  id: number;
  firstName: string;
  lastName: string;
}

@Component({
  selector: 'app-historico',
  templateUrl: './historico.component.html',
  styleUrls: ['./historico.component.css']
})

export class HistoricoComponent implements OnInit {

  dtOptions: DataTables.Settings = {};
  persons: Person[] = [];
  // We use this trigger because fetching the list of persons can be quite long,
  // thus we ensure the data is fetched before rendering
  dtTrigger: Subject<any> = new Subject();

  myDataArray = [
  {'data': '2016', 'hora': '12:24', 'sala': '1.2.15'},
  {'data': '2017', 'hora': '15:56', 'sala': '1.2.24'},
  {'data': '2017', 'hora': '10:11', 'sala': '1.2.22'},
  {'data': '2016', 'hora': '09:48', 'sala': '1.2.21'}
  ];

  columnsToDisplay = ['data', 'hora', 'sala'];

  constructor(public authService: AuthService, private router: Router) { }

  ngOnInit(): void {

    this.dtOptions = {
      pagingType: 'full_numbers',
      pageLength: 10
    };
    /*
    this.http.get('data/data.json')
      .map(this.extractData)
      .subscribe(persons => {
        this.persons = persons;
        // Calling the DT trigger to manually render the table
        this.dtTrigger.next();
      });*/
  }
  private extractData(res: Response) {
    const body = res.json();
    return body.data || {};
  }
}
