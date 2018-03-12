import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { AuthService } from '../providers/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { ApiconnectorService } from '../service/apiconnector.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private authService: AuthService, private _firebaseAuth: AngularFireAuth,
     private router: Router, private http: HttpClient, private conn: ApiconnectorService) { }

  ngOnInit() {

    if (this.authService.isLoggedIn()) {
      console.log('URL', this.conn.clientURL);
      console.log('cenas', this.authService.getUser().providerData);
      const data = {};
      const baseurl = '';
      this.http.post(baseurl, data).subscribe(
        res => {
          console.log(res);
        },
        (err: HttpErrorResponse) => {
          if (err.error instanceof Error) {
            console.log('Client-side error occured.');
          } else {
            console.log('Server-side error occured.');
          }
        }
      );
      this.router.navigate(['/']);
    } else {
      console.log('asfajos');
    }
  }

  login() {
    // this.authService.signInWithGoogle();
    this.authService.loginWithGoogle();
  }

}
