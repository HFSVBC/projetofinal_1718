import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from './providers/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthService],
})
export class AppComponent implements OnInit {

  user;

  constructor(public router: Router,  private authService: AuthService) {
    this.user = authService.getUser();
  }

  ngOnInit() {
    this.user = this.authService.getUser();
  }
}
