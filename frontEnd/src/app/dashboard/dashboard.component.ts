import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { APIConnectorService } from '../service/apiconnector.service';
import { CookieService } from 'angular2-cookie/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private user;

  constructor(public authService: AuthService, private router: Router, private _cookieService: CookieService) {
    this.user = authService.getUser();
    _cookieService.put('page', '/dashboard');
  }

  ngOnInit() {
    // console.log('DETAILS:', this.angularAuth.auth.currentUser.providerData[0]);
  }

}
