import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';
// import { CookieService } from 'angular2-cookie/core';
import { CookieService } from 'ngx-cookie';

import '@angular/animations';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  name;
  photo;
  private user;
  tipo;
  toggleMenu = false;
  toggleDropdown = false;

  constructor(public authService: AuthService, public angularAuth: AngularFireAuth, private router: Router,
  private _cookieService: CookieService) {
    this.user = authService.getUser();
    this.tipo = _cookieService.get('tipo');
  }

  ngOnInit() {
    this.name = this.user.displayName;
    this.photo = this.user.photoURL;
  }

  logout() {
    this.authService.logout();
  }

  onToggleMenu() {
    if (this.toggleMenu === true) {
      this.toggleMenu = false;
    } else {
      this.toggleMenu = true;
    }
  }

  onToggleDropdown() {
    if (this.toggleDropdown === true) {
      this.toggleDropdown = false;
    } else {
      this.toggleDropdown = true;
    }
  }
}
