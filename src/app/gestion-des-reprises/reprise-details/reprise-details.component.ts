import { Component, OnInit } from '@angular/core';
import { RepriseService } from "../../reprise.service";
import { Reprise } from "../../reprise";
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-reprise-details',
  templateUrl: './reprise-details.component.html',
  styleUrls: ['./reprise-details.component.css']
})
export class RepriseDetailsComponent implements OnInit {

  id: number;
  reprise: Reprise;

  constructor(private route: ActivatedRoute,private router: Router, private repriseService: RepriseService) { }

  ngOnInit() {
    this.reprise = new Reprise();

    this.id = this.route.snapshot.params['id'];
    
    this.repriseService.getReprise(this.id)
      .subscribe(data => {
        console.log(data)
        this.reprise = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['reprises']);
  }

}
