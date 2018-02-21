import { Injectable } from '@angular/core';
import { Router } from "@angular/router";

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
  private user: Observable<firebase.User>;
  public userDetails;
  private token: String;
  constructor(private _firebaseAuth: AngularFireAuth, private router: Router) {
    this.userDetails = null;
    this.user = _firebaseAuth.authState;
  }
  signInWithGoogle() {
    var provider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().useDeviceLanguage();
    this._firebaseAuth.auth.signInWithPopup(provider)
    .then(result => {
      this.token = result.credential.accessToken;
      this.userDetails = result.user;
      console.log('User '+this.userDetails.displayName+" logged in!");
    })
    .catch(function(error) {
      // Handle Errors here.
      // var errorCode = error.code;
      var errorMessage = error.message;
      // The email of the user's account used.
      // var email = error.email;
      // The firebase.auth.AuthCredential type that was used.
      // var credential = error.credential;
      console.log('Something went wrong: '+errorMessage);
    });
  }
  isLoggedIn() {
    return this.userDetails !== null;
  }
  logout() {
    this.userDetails = null;
    this._firebaseAuth.auth.signOut()
      .then((res) => this.router.navigate(['/']));
  }
}
