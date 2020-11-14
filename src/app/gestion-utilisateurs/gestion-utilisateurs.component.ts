import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../restapi.service';
import { User } from '../user';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-gestion-utilisateurs',
  templateUrl: './gestion-utilisateurs.component.html',
  styleUrls: ['./gestion-utilisateurs.component.css']
})
export class GestionUtilisateursComponent implements OnInit {

  id: number;
  user: User;

  users:User[];
  constructor(private restApiService: RestapiService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.user = new User();

    this.id = this.route.snapshot.params['id'];

    this.restApiService.getUser().subscribe((data: User[]) => {
      console.log(data)
      this.users = data;
    }),
    error => console.error();
    
  }

  updateUser() {
    this.restApiService.updateUser(this.id, this.user)
      .subscribe(data => {
        console.log(data);
        this.user = new User();
      }, error => console.log(error));
  }

  onSubmit() {
    this.updateUser();    
  }

}
