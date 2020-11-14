import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../restapi.service';
import { User } from '../user';


@Component({
  selector: 'app-gestion-administrateur',
  templateUrl: './gestion-administrateur.component.html',
  styleUrls: ['./gestion-administrateur.component.css']
})
export class GestionAdministrateurComponent implements OnInit {

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
