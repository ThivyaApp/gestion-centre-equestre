import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AdministrationComponent } from './administration/administration.component';
import { FicheRenseignementComponent } from './fiche-renseignement/fiche-renseignement.component';
import { GestionAdministrateurComponent } from './gestion-administrateur/gestion-administrateur.component';
import { GestionUtilisateursComponent } from './gestion-utilisateurs/gestion-utilisateurs.component';

import { PageaccueilMoniteurComponent } from './pageaccueil-moniteur/pageaccueil-moniteur.component'
import { HorseListComponent } from './gestion-des-chevaux/horse-list/horse-list.component';
import { CreateHorseComponent } from './gestion-des-chevaux/create-horse/create-horse.component';
import { HorseDetailsComponent } from './gestion-des-chevaux/horse-details/horse-details.component';
import { GestionChevauxComponent } from './gestion-des-chevaux/gestion-chevaux/gestion-chevaux.component';
import { ReprisesListComponent } from './gestion-des-reprises/reprises-list/reprises-list.component';
import { CreateRepriseComponent } from './gestion-des-reprises/create-reprise/create-reprise.component';
import { RepriseDetailsComponent } from './gestion-des-reprises/reprise-details/reprise-details.component';
import { PageReprisesComponent } from './page-reprises/page-reprises.component';

import {HomeComponent} from "./home/home.component";
import {OffresComponent} from "./offres/offres.component";
import {ConnexionComponent} from "./connexion/connexion.component";
import { CreateUserComponent } from "./create-user/create-user.component";
import { AddUserComponent } from "./add-user/add-user.component";

const routes: Routes = [
  { path: '' , component: HomeComponent},
  { path: 'accueil-moniteur', component: PageaccueilMoniteurComponent },
  { path: 'chevaux', component: HorseListComponent },
  { path: 'ajout-cheval', component: CreateHorseComponent },
  { path: 'detail-cheval/:id', component: HorseDetailsComponent },
  { path: 'gestion-chevaux', component: GestionChevauxComponent },
  { path: 'reprises', component: ReprisesListComponent },
  { path: 'ajout-reprise', component: CreateRepriseComponent },
  { path: 'detail-reprise/:id', component: RepriseDetailsComponent },
  { path: 'administration', component: AdministrationComponent},
  { path:'gestion_administrateur', component: GestionAdministrateurComponent},
  { path:'gestion_utilisateur', component: GestionUtilisateursComponent},
  { path:'fiche_renseignement', component: FicheRenseignementComponent},
  { path:'page-reprise', component: PageReprisesComponent},
  { path:'inscription' , component: CreateUserComponent},
  { path:'offres' , component: OffresComponent},
  { path:'connexion' , component: ConnexionComponent},
  { path: 'add-user', component: AddUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
