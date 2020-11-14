import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user';

@Injectable({
  providedIn: 'root'
})
export class RestapiService {

  private baseUrl = "http://localhost:8081/centreequestre/api/users"

  constructor(private http:HttpClient) { }

  addUser(user: Object) :Observable<Object>{
    return this.http.post<User[]>(`${this.baseUrl}`, user);
  }
  
  getUser(): Observable<Object>{
    return this.http.get<User[]>(`${this.baseUrl}`);
  }
}
