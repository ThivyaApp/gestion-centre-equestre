import { Component, OnInit } from '@angular/core';
import { Observable } from "rxjs";
import { RepriseService } from "../reprise.service";
import { Reprise } from "../reprise";
import { Router } from '@angular/router';

@Component({
  selector: 'app-page-reprises',
  templateUrl: './page-reprises.component.html',
  styleUrls: ['./page-reprises.component.css']
})
export class PageReprisesComponent implements OnInit {

  reprises: Observable<Reprise[]>;
  constructor(private repriseService: RepriseService, private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }

  reloadData() {
    this.reprises = this.repriseService.getRepriseList();
  }

  deleteReprise(id: number) {
    this.repriseService.deleteReprise(id)
      .subscribe(
        data => {
          console.log(data);
          this.reloadData();
        },
        error => console.log(error));
  }

  repriseDetails(id: number){
    this.router.navigate(['detail-reprise', id]);
  }

  goBack(): void {
    this.router.navigate(['accueil-moniteur']);
  }


}
