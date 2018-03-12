// Core
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

// Modules
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';

// OAuth
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './providers/auth.service';

// Services
import { LoggedInUsersService } from './service/logged-in-users.service';
import { ApiconnectorService } from './service/apiconnector.service';

// Routes
import { routes } from './app.routes';

// Components
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { environment } from './../environments/environment';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HistoricoComponent } from './historico/historico.component';
import { PresencasComponent } from './presencas/presencas.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    LoginPageComponent,
    DashboardComponent,
    HistoricoComponent,
    PresencasComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    routes,
    HttpClientModule,
    DataTablesModule
  ],
  providers: [
    AuthService,
    LoggedInUsersService,
    ApiconnectorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
