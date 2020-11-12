import { HorseDetailsComponent } from '../horse-details/horse-details.component';
import { Observable } from "rxjs";
import { HorseService } from "../../horse.service";
import { Horse } from "../../horse";

import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-horse-list',
  templateUrl: './horse-list.component.html',
  styleUrls: ['./horse-list.component.css']
})
export class HorseListComponent implements OnInit {

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
