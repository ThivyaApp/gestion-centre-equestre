import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from "./home/home.component";
import {OffresComponent} from "./offres/offres.component";
import {ConnexionComponent} from "./connexion/connexion.component";
import { CreateUserComponent } from "./create-user/create-user.component";


const routes: Routes = [
  // {path:'' , redirectTo:'connexion', pathMatch:"full"},
  {path:'' , component: HomeComponent},
  {path:'inscription' , component: CreateUserComponent},
  {path:'offres' , component: OffresComponent},
  {path:'connexion' , component: ConnexionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
