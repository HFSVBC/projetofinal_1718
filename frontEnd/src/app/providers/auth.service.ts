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

@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;
  private current;
  private token: String;

  constructor(private _firebaseAuth: AngularFireAuth, private router: Router, private http: HttpClient,
    private apiconnector: APIConnectorService) {

    this.user = _firebaseAuth.authState;

    this.user.subscribe(user => {
        if (user) {
          this.current = user;
          console.log('User already logged in', this.current);
          console.log('current user', _firebaseAuth.auth.currentUser);

          // Send info to backend that user just login
          const httpOptions = apiconnector.httpOptions;
          const url = apiconnector.loginPOST;
          const user_info = this.current.providerData[0];
          const data = {
            'name': user_info.displayName,
            'avatar': user_info.photoURL,
            'email': user_info.email,
            'uid': user_info.uid,
            // withCredentials: true
          };

          console.log('data', data);

          this.http.post(url,
            {
            'name': user_info.displayName,
            'avatar': user_info.photoURL,
            'email': user_info.email,
            'uid': user_info.uid,
            }, httpOptions)
          .subscribe(result => {
            console.log(result);
            console.log('fiz o pedido');
          },
          (err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
                console.log('Client-side error occured.');
            } else {
                console.log('Server-side error occured.');
            }
          }
          );

          this.router.navigateByUrl('/dashboard');
        } else {
          this.current = false;
        }
      }
    );

  }

  canActivate(): Observable<boolean> {
    return Observable.from(this._firebaseAuth.authState)
      .take(1)
      .map(state => !!state)
      .do(authenticated => {
        if (!authenticated) {
          this.router.navigate([ '/login' ]);
        }
      });
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
      console.log('User ' + this.current.displayName + 'logged in! boa', this.token);
      this.router.navigateByUrl('/dashboard');
    })
    .catch(error => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('Something went wrong: ' + errorMessage + ' code ' + errorCode);
    });

    });

/*
    firebase.auth().signInWithRedirect(provider)
    .then(result => {
      if (result.credential) {
        const token = result.credential.accessToken;
        console.log('OKAY');
      }
      this.userDetails = result.user;
      console.log('User ' + this.userDetails.displayName + 'logged in! boa', this.token);
      this.router.navigateByUrl('/');
    })
    .catch(error => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log('Something went wrong: ' + errorMessage + 'code' + errorCode);
    });
*/
  }

  loginWithGoogle() {

    firebase.auth().useDeviceLanguage();

    this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()).then(res => {
        const user_info =  res.user.providerData[0];
        console.log('User just logged in by google ', res.user.providerData[0].displayName);

        // POST INFO
        const data = {
          displayName: user_info.displayName,
          photoURL: user_info.photoURL,
          email: user_info.email,
          uid: user_info.uid,
          withCredentials: true
        };
        const baseURL = 'http://localhost:8000';
        this.http.post(baseURL, data).subscribe(
          result => {
            console.log(result);
            console.log('fiz o pedido');
          },
          (err: HttpErrorResponse) => {
            if (err.error instanceof Error) {
              console.log('Client-side error occured.');
            } else {
              console.log('Server-side error occured.');
            }
          }
        );
        // END POST
        this.current = res.user;
        this.router.navigateByUrl('/');
        })
      .catch((err) => {
        const error = err.message;
        console.log('Something went wrong: ' + error);
      });
  }

  isLoggedIn() {
    return firebase.auth().currentUser !== null;
  }

  logout() {
    this.current = null;
    this._firebaseAuth.auth.signOut();
    this.router.navigateByUrl('/login');
  }

  getUser() {
    return this.current;
  }

  getToken() {
    return this.token;
  }
}
