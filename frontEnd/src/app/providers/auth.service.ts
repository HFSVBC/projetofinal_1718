import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/observable/from';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Session } from 'protractor';
import { APIConnectorService } from '../service/apiconnector.service';
import { userInfo } from 'os';
import { CookieService } from 'angular2-cookie/core';

@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;
  private current;
  private token: String;

  constructor(private _firebaseAuth: AngularFireAuth, private router: Router, private http: HttpClient,
    private apiconnector: APIConnectorService, private _cookieService: CookieService) {

    this.user = _firebaseAuth.authState;
    console.log(this.user);

    this.user.subscribe(user => {
        if (user) {
          this.current = user;
          console.log('User was already registed', this.current);
          // Send info to backend that a user just login
          const user_info = this.current.providerData[0];

          this.apiconnector.loginPost(user_info)
          .subscribe(res => {
            console.log('cenas', res);
            const t = res['token'];
            console.log('t', t);
          // Get user type from database
          // this._cookieService.put('tipo', '10');
          // this.router.navigateByUrl('/dashboard');
          });

          // Get user type from database
          this._cookieService.put('tipo', '10');

          const page = _cookieService.get('page');
          if (page) {
            this.router.navigateByUrl(page);
          } else {
            this.router.navigateByUrl('/dashboard');
          }
        } else {
          console.log('User has to register');
          this.current = false;
        }
      }
    );

  }

  signInWithGoogle() {

    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
    .then(function() {

      const provider = new firebase.auth.GoogleAuthProvider();
      firebase.auth().useDeviceLanguage();

      firebase.auth().signInWithPopup(provider)
      .then(result => {
        this.token = result.credential.accessToken;
        this.current = result.user;
        console.log('New user just signin');

        // Send info to backend that user just login
        const user_info = this.current.providerData[0];
        this.apiconnector.loginPost(user_info);
        // Get user type from database
        // return da funcao loginPost TODO
        this._cookieService.put('tipo', '10');
        this.router.navigateByUrl('/dashboard');
    })
    .catch(error => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('Something went wrong: ' + errorMessage + ' code ' + errorCode);
    });

    });

  }

  isLoggedIn() {
    return firebase.auth().currentUser !== null;
  }

  logout() {
    this.current = null;
    this._firebaseAuth.auth.signOut();
    this._cookieService.removeAll();
    this.router.navigateByUrl('/login');
  }

  getUser() {
    return this.current;
  }

  getToken() {
    return this.token;
  }
}
