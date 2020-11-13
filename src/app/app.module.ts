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

@NgModule({
  declarations: [
    AppComponent,
    GestionChevauxComponent,
    PageaccueilMoniteurComponent,
    CreateHorseComponent,
    HorseDetailsComponent,
    HorseListComponent
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
