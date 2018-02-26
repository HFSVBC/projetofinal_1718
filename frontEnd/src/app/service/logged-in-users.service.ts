import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';
import 'rxjs/add/observable/from';

import { AuthService } from '../providers/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class LoggedInUsersService implements CanActivate {

  constructor(private angularAuth: AngularFireAuth, private router: Router) {}

  canActivate(): Observable<boolean> {
    return Observable.from(this.angularAuth.authState)
      .take(1)
      .map(state => !!state)
      .do(authenticated => {
        if (!authenticated) {
          this.router.navigate([ '/login' ]);
        }
      });
  }

}
