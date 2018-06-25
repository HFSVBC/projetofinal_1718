import { Component, OnInit } from '@angular/core';
import { AuthService } from '../providers/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  errorLogin;

  constructor(private authService: AuthService) {
    this.errorLogin = false;
  }

  ngOnInit() {

  }

  login() {
    this.authService.signInWithGoogle();
  }

}
