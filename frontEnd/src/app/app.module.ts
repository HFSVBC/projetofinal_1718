import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AngularFireModule } from 'angularfire2';
// for AngularFireAuth
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { environment } from './../environments/environment';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AuthService } from './providers/auth.service';
import { LoggedInUsersService } from './service/logged-in-users.service';
import { HistoricoComponent } from './historico/historico.component';
import { RoutingModule } from './/routing.module';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    LoginPageComponent,
    DashboardComponent,
    HistoricoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    RoutingModule
  ],
  providers: [
    AuthService,
    LoggedInUsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
