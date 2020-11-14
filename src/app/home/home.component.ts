import { Component, OnInit } from '@angular/core';
import {User} from '.././user';
import {
  trigger,
  state,
  style,
  animate,
  transition,
} from '@angular/animations';
import { RestapiService } from '../restapi.service';
import { Router } from '@angular/router';
import {AppComponent} from '../app.component'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  animations: [
    trigger('openClose', [
      // ...
      state('open', style({
        top: '90px'
      })),
      state('closed', style({
        top: '140px'
      })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
    trigger('connexionApparait',[
      state('hiden', style({
        opacity: 0
      })),
      state('show', style({
        opacity: 1
      })),
      transition('hiden => show', [
        animate('1s')
      ]),
      transition('show => hiden', [
        animate('0.5s')
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  isOpen = true;
  submitted = false;
  user: User = new User();
  users: User[];
  
  constructor(private restapiService: RestapiService, private router: Router){}
  ngOnInit(): void {
  }
  
    toggle() {
      this.isOpen = !this.isOpen;
    }

    check(){
      this.restapiService.getUser().subscribe((data: User[]) => {
        // console.log(data)
        this.users = data;
        console.log(this.user)
        const isGoodCredentials = (element) =>
        element.username == this.user.username && element.password == this.user.password; 
        if(this.users.findIndex(isGoodCredentials) != -1){
          console.log("connecté bg !");
          // window.location.reload();
        }
      }),
      error => console.error();
      
    }

    onSubmit(){
      this.submitted = true;
      console.log("submitted")
      this.check();   
    }

}
