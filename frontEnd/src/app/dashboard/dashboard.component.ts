import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { ApiconnectorService } from '../service/apiconnector.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  private user;

  constructor(public authService: AuthService, private router: Router) {
    this.user = authService.getUser();
  }

  ngOnInit() {
    // console.log('DETAILS:', this.angularAuth.auth.currentUser.providerData[0]);
  }

}
