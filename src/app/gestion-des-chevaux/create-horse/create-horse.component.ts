import { HorseService } from "../../horse.service";
import { Horse } from "../../horse";

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-horse',
  templateUrl: './create-horse.component.html',
  styleUrls: ['./create-horse.component.css']
})
export class CreateHorseComponent implements OnInit {

  horse: Horse = new Horse();
  submitted = false;

  constructor(private horseService: HorseService, private router: Router) { }

  ngOnInit(): void {
  }

  newHorse(): void {
    this.submitted = false;
    this.horse = new Horse();
  }

  save() {
    this.horseService
    .createHorse(this.horse).subscribe(data => {
      console.log(data)
      this.horse = new Horse();
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    this.save();    
  }

  gotoList() {
    this.router.navigate(['accueil-moniteur']);
  }

  goBack(): void {
    this.router.navigate(['accueil-moniteur']);
  }

}
