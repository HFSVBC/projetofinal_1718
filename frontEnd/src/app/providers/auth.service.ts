import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;
  public userDetails;
  private token: String;

  constructor(private _firebaseAuth: AngularFireAuth, private router: Router) {

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
    this._firebaseAuth.auth.signInWithPopup(
      new firebase.auth.GoogleAuthProvider()).then(res => {
        console.log('User just logged in by google ', res);
        this.router.navigateByUrl('/');
        })
      .catch((err) => {
        const error = err.message;
        console.log('Something went wrong: ' + error);
      });
  }

  isLoggedIn() {
    return this.userDetails !== null;
  }

  logout() {
    /*this._firebaseAuth.auth.signOut()
      .then((res) => this.router.navigate(['/']));*/
    this._firebaseAuth.auth.signOut();
    this.userDetails = null;
    this.router.navigateByUrl('/login');
  }

  getName(){
    return firebase.auth().currentUser.displayName;
  }
}
