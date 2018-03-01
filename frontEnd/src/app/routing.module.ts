import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { LoggedInUsersService } from './service/logged-in-users.service';

const appRoutes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    canActivate: [LoggedInUsersService]
  },
  {
    path: 'login',
    component: LoginPageComponent
    // component: DashboardComponent
  }
];

@NgModule({


  imports: [ RouterModule.forRoot(appRoutes)],// { enableTracing: true } <-- debugging purposes only
  exports: [ RouterModule ]
})
export class RoutingModule { }
