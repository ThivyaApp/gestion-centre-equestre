import { Component, OnInit } from '@angular/core';
import { USERS } from '../mock-users';

@Component({
  selector: 'app-fiche-renseignement',
  templateUrl: './fiche-renseignement.component.html',
  styleUrls: ['./fiche-renseignement.component.css']
})
export class FicheRenseignementComponent implements OnInit {

  users = USERS;
  constructor() { }

  ngOnInit(): void {
  }

}
