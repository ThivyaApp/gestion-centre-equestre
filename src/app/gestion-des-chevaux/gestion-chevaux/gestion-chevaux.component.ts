import { Component, OnInit } from '@angular/core';
import { Horse } from '../../horse';
import { Location } from '@angular/common';

@Component({
  selector: 'app-gestion-chevaux',
  templateUrl: './gestion-chevaux.component.html',
  styleUrls: ['./gestion-chevaux.component.css']
})
export class GestionChevauxComponent implements OnInit {

  horse: Horse = {
    id: 1,
    name: 'Alberto',
    type: 'Comptois',
    age : 10
  };

  constructor(
    private location: Location
  ){}

  goBack(): void {
  this.location.back();
  }

  ngOnInit(): void {
  }

}
