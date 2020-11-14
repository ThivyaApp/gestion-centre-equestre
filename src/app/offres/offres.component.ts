import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../restapi.service';
import { User } from '../user';

@Component({
  selector: 'app-offres',
  templateUrl: './offres.component.html',
  styleUrls: ['./offres.component.css']
})
export class OffresComponent implements OnInit {

  users:User[];
  constructor(private restApiService: RestapiService) { }

  ngOnInit(): void {
    this.restApiService.getUser().subscribe((data: User[]) => {
      console.log(data)
      this.users = data;
    })
  }

}
