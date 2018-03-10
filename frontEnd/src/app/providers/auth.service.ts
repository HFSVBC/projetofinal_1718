import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;
  public userDetails;
  private token: String;

  constructor(private _firebaseAuth: AngularFireAuth, private router: Router, private http: HttpClient) {

    this.user = _firebaseAuth.authState;
    this.user.subscribe(
      (user) => {
        if (user) {
          this.userDetails = user;
          console.log('User already logged in', this.userDetails);
          this.router.navigateByUrl('/');
        } else {
          this.userDetails = null;
        }
      }
    );
  }

  signInWithGoogle() {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().useDeviceLanguage();
    this._firebaseAuth.auth.signInWithPopup(provider)
    .then(result => {
      this.token = result.credential.accessToken;
      this.userDetails = result.user;
      console.log('User ' + this.userDetails.displayName + 'logged in!');
      this.router.navigateByUrl('');
    })
    .catch(function(error) {
      // Handle Errors here.
      // var errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      // var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      // var credential = error.credential;
      console.log('Something went wrong: ' + errorMessage);
    });
  }

  loginWithGoogle() {

    firebase.auth().useDeviceLanguage();

    /*
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithRedirect(provider).then(result => {
      const token = result.credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log('cenas', token, user);
      this.router.navigateByUrl('/');
     });*/

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

        this.userDetails = res.user;
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
    /*this._firebaseAuth.auth.signOut()
      .then((res) => this.router.navigate(['/']));*/
    this._firebaseAuth.auth.signOut();
    this.userDetails = null;
    this.router.navigateByUrl('/login');
  }

  getUser() {
    return firebase.auth().currentUser;
  }
}
