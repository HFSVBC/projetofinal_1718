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
export class AdminService implements CanActivate {

  constructor(private router: Router, private _cookieService: CookieService) { }

  canActivate() {
    const tipo = this._cookieService.get('tipo');
    console.log('tipo de user', tipo);
    if (tipo !== '0') {
      // this.router.navigate([ '/dashboard' ]);
      console.log('user sem permissao');
      return false;
    } else {
      // this.router.navigate([ '/admin' ]);
      return true;
    }
  }


}
