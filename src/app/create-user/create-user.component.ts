import { Component, OnInit } from '@angular/core';
import {User} from '../user';
import {RestapiService} from '../restapi.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: User = new User();
  
  submitted = false;

  constructor(private restapiService: RestapiService, private router: Router) { }

  ngOnInit(): void {
  }

  newUser(): void {
    this.submitted = false;
    this.user= new User();
  }

  save() {
    this.restapiService
    .addUser(this.user).subscribe(data => {
      this.user= new User();
      console.log(data)
      this.gotoList();
    }, 
    error => console.log(error));
  }

  onSubmit() {
    this.submitted = true;
    console.log("hello")
    this.save();    
  }

  gotoList() {
    this.router.navigate(['']);
  }
}
