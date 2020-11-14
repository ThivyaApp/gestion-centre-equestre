import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdministrationComponent } from './administration/administration.component';
import { FicheRenseignementComponent } from './fiche-renseignement/fiche-renseignement.component';
import { GestionAdministrateurComponent } from './gestion-administrateur/gestion-administrateur.component';
import { GestionUtilisateursComponent } from './gestion-utilisateurs/gestion-utilisateurs.component';

const routes: Routes = [
  {path: 'administration', component: AdministrationComponent},
  {path:'gestion_administrateur', component: GestionAdministrateurComponent},
  {path:'gestion_utilisateur', component: GestionUtilisateursComponent},
  {path:'fiche_renseignement', component: FicheRenseignementComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
