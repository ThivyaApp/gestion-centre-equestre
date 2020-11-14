import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestionChevauxComponent } from './gestion-des-chevaux/gestion-chevaux/gestion-chevaux.component';
import { PageaccueilMoniteurComponent } from './pageaccueil-moniteur/pageaccueil-moniteur.component';
import { CreateHorseComponent } from './gestion-des-chevaux/create-horse/create-horse.component';
import { HorseDetailsComponent } from './gestion-des-chevaux/horse-details/horse-details.component';
import { HorseListComponent } from './gestion-des-chevaux/horse-list/horse-list.component';

import { ReprisesListComponent } from './gestion-des-reprises/reprises-list/reprises-list.component';
import { CreateRepriseComponent } from './gestion-des-reprises/create-reprise/create-reprise.component';
import { RepriseDetailsComponent } from './gestion-des-reprises/reprise-details/reprise-details.component';
import { AdministrationComponent } from './administration/administration.component';
import { GestionAdministrateurComponent } from './gestion-administrateur/gestion-administrateur.component';
import { GestionUtilisateursComponent } from './gestion-utilisateurs/gestion-utilisateurs.component';
import { FicheRenseignementComponent } from './fiche-renseignement/fiche-renseignement.component';
import { PageReprisesComponent } from './page-reprises/page-reprises.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HomeComponent } from './home/home.component';
import { OffresComponent } from './offres/offres.component';
import { ConnexionComponent } from './connexion/connexion.component';
import { RestapiService } from './restapi.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CreateUserComponent } from './create-user/create-user.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

@NgModule({
  declarations: [
    AppComponent,
    GestionChevauxComponent,
    PageaccueilMoniteurComponent,
    CreateHorseComponent,
    HorseDetailsComponent,
    HorseListComponent,
    ReprisesListComponent,
    CreateRepriseComponent,
    RepriseDetailsComponent,
    AdministrationComponent,
    GestionAdministrateurComponent,
    GestionUtilisateursComponent,
    FicheRenseignementComponent,
    PageReprisesComponent,
    HomeComponent,
    OffresComponent,
    ConnexionComponent,
    CreateUserComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [RestapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
