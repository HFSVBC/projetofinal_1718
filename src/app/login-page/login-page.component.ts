import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { AuthService } from '../providers/auth.service';
import { APIConnectorService } from '../service/apiconnector.service';
import { CookieService } from 'angular2-cookie/core';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  errorLogin;

  constructor(private authService: AuthService, private router: Router, private _cookieService: CookieService) {
    this.errorLogin = false;
  }

  ngOnInit() {

  }

  login() {
    this.authService.signInWithGoogle();
  }

}