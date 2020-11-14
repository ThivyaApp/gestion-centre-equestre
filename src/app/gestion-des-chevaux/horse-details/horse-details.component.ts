import { HorseService } from "../../horse.service";
import { Horse } from "../../horse";
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-horse-details',
  templateUrl: './horse-details.component.html',
  styleUrls: ['./horse-details.component.css']
})
export class HorseDetailsComponent implements OnInit {

  id: number;
  horse: Horse;

  constructor(private route: ActivatedRoute,private router: Router, private horseService: HorseService) { }

  ngOnInit() {
    this.horse = new Horse();

    this.id = this.route.snapshot.params['id'];
    
    this.horseService.getHorse(this.id)
      .subscribe(data => {
        console.log(data)
        this.horse = data;
      }, error => console.log(error));
  }

  list(){
    this.router.navigate(['chevaux']);
  }

}
