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

  constructor(public authService: AuthService, public angularAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/']);
    }
    this.name = this.angularAuth.auth.currentUser.displayName;
  }

  logout() {
    // this.authService.logout();
    // dunno why doesnt work...
    this.angularAuth.auth.signOut();
    this.router.navigateByUrl('/login');
  }

}
