import { RepriseService } from "../../reprise.service";
import { Reprise } from "../../reprise";

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-reprise',
  templateUrl: './create-reprise.component.html',
  styleUrls: ['./create-reprise.component.css']
})
export class CreateRepriseComponent implements OnInit {

  reprise: Reprise = new Reprise();
  submitted = false;

  constructor(private repriseService: RepriseService, private router: Router) { }

  ngOnInit(): void {
  }

  newReprise(): void {
    this.submitted = false;
    this.reprise = new Reprise();
  }

  save() {
    this.repriseService
    .createReprise(this.reprise).subscribe(data => {
      console.log(data)
      this.reprise = new Reprise();
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
