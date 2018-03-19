import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import { Router } from '@angular/router';

import { AuthService } from '../providers/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  name;
  photo;
  private user;

  constructor(public authService: AuthService, public angularAuth: AngularFireAuth, private router: Router) {
    this.user = authService.getUser();
  }

  ngOnInit() {
    this.name = this.user.displayName;
    this.photo = this.user.photoURL;
  }

  logout() {
    this.authService.logout();
  }

}
