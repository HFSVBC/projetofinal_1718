import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../providers/auth.service';

@Component({
  selector: 'app-initial',
  templateUrl: './initial.component.html',
  styleUrls: ['./initial.component.css']
})
export class InitialComponent implements OnInit {
  constructor(public authService: AuthService, private router: Router) {
    console.log('aqui ' + authService.getName());
    // PROBLEMA!!!! nao conseguimos ir buscar o user ao authService
  }

  ngOnInit() {
  }

}
