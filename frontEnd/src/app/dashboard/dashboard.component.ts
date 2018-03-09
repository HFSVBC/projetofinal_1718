import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(public authService: AuthService, public angularAuth: AngularFireAuth, private router: Router) { }

  ngOnInit() {
    // console.log('DETAILS:', this.angularAuth.auth.currentUser.providerData[0]);
  }

}
