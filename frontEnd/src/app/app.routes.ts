import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HistoricoComponent } from './historico/historico.component';
import { InitialComponent } from './initial/initial.component';
import { PresencasComponent } from './presencas/presencas.component';

import { LoggedInUsersService } from './service/logged-in-users.service';

export const router: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
    canActivate: [LoggedInUsersService]
  },
  {
    path: 'dashboard',
    component: InitialComponent,
    canActivate: [LoggedInUsersService]
  },
  {
    path: 'historico',
    component: HistoricoComponent,
    canActivate: [LoggedInUsersService]
  },
  {
    path: 'presencas',
    component: PresencasComponent,
    canActivate: [LoggedInUsersService]
  },
  {
    path: 'login',
    component: LoginPageComponent
  }
];
export const routes: ModuleWithProviders = RouterModule.forRoot(router);
