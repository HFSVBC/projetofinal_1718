import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/observable/from';
import { CookieService } from 'angular2-cookie/core';

@Injectable()
export class AllService implements CanActivate {

  constructor(private router: Router, private _firebaseAuth: AngularFireAuth) { }

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

}
