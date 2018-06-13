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
import { CookieService } from 'angular2-cookie/core';

@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;
  private current;

  constructor(private _firebaseAuth: AngularFireAuth, private router: Router, private http: HttpClient,
    private apiconnector: APIConnectorService, private _cookieService: CookieService) {

    this.user = _firebaseAuth.authState;
    console.log('Auth state', _firebaseAuth.authState);

    this.user.subscribe(user => {
      if (user) {
        this.current = user;
        console.log('User logged in');
      } else {
        console.log('User has to register');
        this.current = false;
      }
    });

  }

  signInWithGoogle(): any {

    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION);

    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().useDeviceLanguage();

    firebase.auth().signInWithPopup(provider)
    .then(result => {
      this.current = result.user;
      console.log('result', result);
      console.log('New user just signin', this.current);

      // Send info to backend that user just login
      const user_info = this.current.providerData[0];

      this.apiconnector.loginPost(user_info)
      .subscribe(res => {
        // Process code
        const code = res['code'];
        console.log(res);

        if (code !== 200) {
          this._cookieService.put('error', 'true');
          this.logout();
          alert('Something went wrong! Try again later.');
        } else {
          const tipo = this.getTipo(res['data']['user_type']);
          this._cookieService.put('tipo', tipo);
          this._cookieService.put('token', res['data']['token']);
          this.router.navigateByUrl('/dashboard');
        }
      });
    })
    .catch(error => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('Something went wrong: ' + errorMessage + ' code ' + errorCode);
    });

  }

  getTipo(t) {
    if (t === 'student') {
      return '0';
    } else if (t === 'teacher') {
      return '1';
    } else if (t === 'staff member') {
      return '2';
    } else if (t === 'security guard') {
      return '3';
    } else if (t === 'admin') {
      return '10';
    }
  }

  isLoggedIn() {
    return firebase.auth().currentUser !== null;
  }

  logout() {
    const url = this.apiconnector.logoutPOST;
    console.log('current', this.current.email);
    const data = new FormData();
    data.append('userTokenId', this._cookieService.get('token'));

    this.apiconnector.postData(url, data).subscribe(res => {
      console.log('res', res);
    });

    this.current = null;
    this._firebaseAuth.auth.signOut();
    this._cookieService.removeAll();
    this.router.navigateByUrl('/login');

  }

  getUser() {
    return this.current;
  }

}
