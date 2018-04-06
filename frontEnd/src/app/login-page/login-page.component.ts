import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { AuthService } from '../providers/auth.service';
import { APIConnectorService } from '../service/apiconnector.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  errorLogin;

  constructor(private authService: AuthService, private router: Router) {
    this.errorLogin = false;
  }

  ngOnInit() {

  }

  login() {
    const a = this.authService.signInWithGoogle();
    console.log('a', a);
  }

}
