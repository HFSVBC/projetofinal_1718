import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HistoricoComponent } from './historico/historico.component';
import { PresencasComponent } from './presencas/presencas.component';

import { AuthService } from './providers/auth.service';
import './menu/menu.component.js'

export const router: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full',
    canActivate: [AuthService]
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AuthService]
  },
  {
    path: 'historico',
    component: HistoricoComponent,
    canActivate: [AuthService]
  },
  {
    path: 'presencas',
    component: PresencasComponent,
    canActivate: [AuthService]
  }
];
export const routes: ModuleWithProviders = RouterModule.forRoot(router);
