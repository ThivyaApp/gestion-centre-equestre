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

  horses: Observable<Horse[]>;
  constructor(private horseService: HorseService, private router: Router, private location: Location) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.horses = this.horseService.getHorseList();
  }

  deleteHorse(id: number) {
    this.horseService.deleteHorse(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  horseDetails(id: number){
    this.router.navigate(['detail-cheval', id]);
  }

  goBack(): void {
    this.router.navigate(['accueil-moniteur']);
  }

}
