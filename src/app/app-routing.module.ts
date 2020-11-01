import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GestionChevauxComponent } from './gestion-chevaux/gestion-chevaux.component';

const routes: Routes = [
  { path: 'gestion-chevaux', component: GestionChevauxComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
