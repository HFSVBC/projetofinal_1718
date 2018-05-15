// Core
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from './../environments/environment';

// Modules
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { DataTablesModule } from 'angular-datatables';
import { FormsModule } from '@angular/forms';

// OAuth
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthService } from './providers/auth.service';

// Services
import { APIConnectorService } from './service/apiconnector.service';
import { CookieService } from 'angular2-cookie/services/cookies.service';

// Routes
import { routes } from './app.routes';

// Components
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HistoricoComponent } from './historico/historico.component';
import { PresencasComponent } from './presencas/presencas.component';
import { AdminComponent } from './admin/admin.component';
import { AdminService } from './providers/admin.service';
import { SecurityService } from './providers/security.service';
import { ProfessorService } from './providers/professor.service';
import { AllService } from './providers/all.service';
import { EspacosComponent } from './espacos/espacos.component';
import { AltPresencasComponent } from './alt-presencas/alt-presencas.component';
import { CriarAcessosComponent } from './criar-acessos/criar-acessos.component';
import { AcidentesComponent } from './acidentes/acidentes.component';
import { SalasComponent } from './salas/salas.component';


@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    LoginPageComponent,
    DashboardComponent,
    HistoricoComponent,
    PresencasComponent,
    AdminComponent,
    EspacosComponent,
    AltPresencasComponent,
    CriarAcessosComponent,
    AcidentesComponent,
    SalasComponent
  ],
  imports: [
    routes,
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    DataTablesModule,
    FormsModule,
  ],
  providers: [
    AuthService,
    APIConnectorService,
    CookieService,
    AdminService,
    SecurityService,
    ProfessorService,
    AllService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
