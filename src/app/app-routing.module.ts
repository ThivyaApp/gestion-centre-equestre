import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageaccueilMoniteurComponent } from './pageaccueil-moniteur/pageaccueil-moniteur.component'
import { HorseListComponent } from './gestion-des-chevaux/horse-list/horse-list.component';
import { CreateHorseComponent } from './gestion-des-chevaux/create-horse/create-horse.component';
import { HorseDetailsComponent } from './gestion-des-chevaux/horse-details/horse-details.component';
import { GestionChevauxComponent } from './gestion-des-chevaux/gestion-chevaux/gestion-chevaux.component';
import { ReprisesListComponent } from './gestion-des-reprises/reprises-list/reprises-list.component';
import { CreateRepriseComponent } from './gestion-des-reprises/create-reprise/create-reprise.component';
import { RepriseDetailsComponent } from './gestion-des-reprises/reprise-details/reprise-details.component';

const routes: Routes = [
  { path: 'accueil-moniteur', component: PageaccueilMoniteurComponent },
  { path: 'chevaux', component: HorseListComponent },
  { path: 'ajout-cheval', component: CreateHorseComponent },
  { path: 'detail-cheval/:id', component: HorseDetailsComponent },
  { path: 'gestion-chevaux', component: GestionChevauxComponent },
  { path: 'reprises', component: ReprisesListComponent },
  { path: 'ajout-reprise', component: CreateRepriseComponent },
  { path: 'detail-reprise/:id', component: RepriseDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
