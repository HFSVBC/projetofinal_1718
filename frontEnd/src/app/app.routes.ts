import { NgModule } from '@angular/core';
import { ModuleWithProviders } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HistoricoComponent } from './historico/historico.component';
import { PresencasComponent } from './presencas/presencas.component';
import { AdminComponent } from './admin/admin.component';
import { EspacosComponent } from './espacos/espacos.component';
import { AltPresencasComponent } from './alt-presencas/alt-presencas.component';
import { CriarAcessosComponent } from './criar-acessos/criar-acessos.component';
import { AcidentesComponent } from './acidentes/acidentes.component';
import { SalasComponent } from './salas/salas.component';
import { PresencasAlunoComponent } from './presencas-aluno/presencas-aluno.component';


import { AuthService } from './providers/auth.service';
import { AdminService } from './providers/admin.service';
import { ProfessorService } from './providers/professor.service';
import { AlunoService } from './providers/aluno.service';
import { SecurityService } from './providers/security.service';
import { AllService } from './providers/all.service';

/*
    0     student default     AllService
    1     professor           ProfessorService
    2     funcionario
    3     seguranca           SecuritySerice
    10    admin               AdminService
*/

export const router: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full',
    // canActivate: [AuthService]
    canActivate: [AdminService]
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent,
    canActivate: [AllService]
  },
  {
    path: 'historico',
    component: HistoricoComponent,
    canActivate: [AllService]
  },
  {
    path: 'salas',
    component: SalasComponent,
    canActivate: [AllService]
  },
  {
    path: 'presencas-aulas',
    component: PresencasAlunoComponent,
    canActivate: [AlunoService]
  },
  {
    path: 'presencas',
    component: PresencasComponent,
    canActivate: [ProfessorService]
  },
  {
    path: 'alt-presencas',
    component: AltPresencasComponent,
    canActivate: [ProfessorService]
  },
  {
    path: 'espacos',
    component: EspacosComponent,
    canActivate: [SecurityService]
  },
  {
    path: 'criar-acessos',
    component: CriarAcessosComponent,
    canActivate: [SecurityService]
  },
  {
    path: 'acidentes',
    component: AcidentesComponent,
    canActivate: [AllService]
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [AdminService]
  },
  {
    path: '**',
    redirectTo: 'dashboard',
    pathMatch: 'full',
    canActivate: [AuthService]
  }
];
export const routes: ModuleWithProviders = RouterModule.forRoot(router);
