import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GestionChevauxComponent } from './gestion-des-chevaux/gestion-chevaux/gestion-chevaux.component';
import { PageaccueilMoniteurComponent } from './pageaccueil-moniteur/pageaccueil-moniteur.component';
import { CreateHorseComponent } from './gestion-des-chevaux/create-horse/create-horse.component';
import { HorseDetailsComponent } from './gestion-des-chevaux/horse-details/horse-details.component';
import { HorseListComponent } from './gestion-des-chevaux/horse-list/horse-list.component';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReprisesListComponent } from './gestion-des-reprises/reprises-list/reprises-list.component';
import { CreateRepriseComponent } from './gestion-des-reprises/create-reprise/create-reprise.component';
import { RepriseDetailsComponent } from './gestion-des-reprises/reprise-details/reprise-details.component';

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
    RepriseDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
