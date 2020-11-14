import { Component, OnInit } from '@angular/core';
import { RestapiService } from '../restapi.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  username:string;
  password:string;
  messahe:any;

  constructor() { }

  ngOnInit(): void {
  }
}
