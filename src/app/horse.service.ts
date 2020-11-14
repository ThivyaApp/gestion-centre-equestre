import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HorseService {
  private baseUrl = 'http://localhost:8080/centreequestre/api/horses';

  constructor(private http: HttpClient) { }

  getHorse(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createHorse(horse: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, horse);
  }

  updateHorse(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteHorse(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getHorseList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }


}
