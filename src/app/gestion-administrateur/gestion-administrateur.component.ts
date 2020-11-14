import { Component, OnInit } from '@angular/core';
import { USERS } from '../mock-users';


@Component({
  selector: 'app-gestion-administrateur',
  templateUrl: './gestion-administrateur.component.html',
  styleUrls: ['./gestion-administrateur.component.css']
})
export class GestionAdministrateurComponent implements OnInit {

  users = USERS;
  constructor() { }  
    
  ngOnInit(): void {
  }

}
