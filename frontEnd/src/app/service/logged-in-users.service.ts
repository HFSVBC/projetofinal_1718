import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import {Observable} from 'rxjs';

import { AuthService } from '../providers/auth.service'

@Injectable()
export class LoggedInUsersService implements CanActivate {

  constructor(private authService: AuthService, private router: Router) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean>|Promise<boolean>|boolean {
    if ( this.authService.isLoggedIn() ) {
        return true;
    }
    this.router.navigate(['/login']);
    return false;
  }
}