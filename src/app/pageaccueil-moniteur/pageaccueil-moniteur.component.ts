import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-pageaccueil-moniteur',
  templateUrl: './pageaccueil-moniteur.component.html',
  styleUrls: ['./pageaccueil-moniteur.component.css']
})
export class PageaccueilMoniteurComponent implements OnInit {

  constructor(
    private location: Location
  ){}

  goBack(): void {
    this.location.back();
  }

  ngOnInit(): void {
  }

}
