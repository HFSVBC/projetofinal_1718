import { Component, OnInit } from '@angular/core';
import { CookieService } from 'angular2-cookie/core';

@Component({
  selector: 'app-espacos',
  templateUrl: './espacos.component.html',
  styleUrls: ['./espacos.component.css']
})
export class EspacosComponent implements OnInit {

  constructor(private _cookieService: CookieService) {
  }

  ngOnInit() {
  }

}
