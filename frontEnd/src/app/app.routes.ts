import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HistoricoComponent } from './historico/historico.component';
import { InitialComponent } from './initial/initial.component';

import { LoggedInUsersService } from './service/logged-in-users.service';

export const router: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [LoggedInUsersService],
    children: [
      {
        path: 'initial',
        component: InitialComponent
      },
      {
        path: 'historico',
        component: HistoricoComponent
      }
    ]
  },
  {
    path: 'login',
    component: LoginPageComponent
  }
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
