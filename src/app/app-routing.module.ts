import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PageaccueilMoniteurComponent } from './pageaccueil-moniteur/pageaccueil-moniteur.component'
import { HorseListComponent } from './gestion-des-chevaux/horse-list/horse-list.component';
import { CreateHorseComponent } from './gestion-des-chevaux/create-horse/create-horse.component';
import { HorseDetailsComponent } from './gestion-des-chevaux/horse-details/horse-details.component';

const routes: Routes = [
  { path: 'accueil-moniteur', component: PageaccueilMoniteurComponent },
  { path: 'chevaux', component: HorseListComponent },
  { path: 'ajout-cheval', component: CreateHorseComponent },
  { path: 'detail-cheval/:id', component: HorseDetailsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
