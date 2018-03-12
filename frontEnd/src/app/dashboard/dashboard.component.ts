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

  constructor(public authService: AuthService, public angularAuth: AngularFireAuth, private router: Router,
    private conn: ApiconnectorService) {
        // console.log('aqui ' + authService.getName());
        const user = authService.getUser();
        console.log('aqui ' + user.displayName);
        // PROBLEMA!!!! nao conseguimos ir buscar o user ao authService
  }

  ngOnInit() {
    // console.log('DETAILS:', this.angularAuth.auth.currentUser.providerData[0]);
    console.log('URL', this.conn.clientURL);
  }

}
