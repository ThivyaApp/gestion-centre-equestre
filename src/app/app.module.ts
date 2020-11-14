import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdministrationComponent } from './administration/administration.component';
import { GestionAdministrateurComponent } from './gestion-administrateur/gestion-administrateur.component';
import { GestionUtilisateursComponent } from './gestion-utilisateurs/gestion-utilisateurs.component';
import { FicheRenseignementComponent } from './fiche-renseignement/fiche-renseignement.component';

@NgModule({
  declarations: [
    AppComponent,
    AdministrationComponent,
    GestionAdministrateurComponent,
    GestionUtilisateursComponent,
    FicheRenseignementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
