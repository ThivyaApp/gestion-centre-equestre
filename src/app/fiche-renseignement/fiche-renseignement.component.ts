import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../restapi.service';
import { User } from '../user';

@Component({
  selector: 'app-fiche-renseignement',
  templateUrl: './fiche-renseignement.component.html',
  styleUrls: ['./fiche-renseignement.component.css']
})
export class FicheRenseignementComponent implements OnInit {

  users:User[];
  constructor(private restApiService: RestapiService) { }

  ngOnInit(): void {
    this.restApiService.getUser().subscribe((data: User[]) => {
      console.log(data)
      this.users = data;
    }),
    error => console.error();
    
  }

}
