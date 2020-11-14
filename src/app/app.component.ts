import { Component } from '@angular/core';
// Angular Forms Modules
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { RestapiService } from './restapi.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gestion-centre-equestre';
  username:string;
  password:string;
  message:any;


  constructor() { }

}
