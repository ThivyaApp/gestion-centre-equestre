import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionChevauxComponent } from './gestion-chevaux/gestion-chevaux.component';
import { PageaccueilMoniteurComponent } from './pageaccueil-moniteur/pageaccueil-moniteur.component'
import { HorseListComponent } from './gestion-des-chevaux/horse-list/horse-list.component';

const routes: Routes = [
  { path: 'gestion-chevaux', component: GestionChevauxComponent },
  { path: 'accueil-moniteur', component: PageaccueilMoniteurComponent },
  { path: 'chevaux', component: HorseListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
