import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class RepriseService {
  private baseUrl = 'http://localhost:8080/centreequestre/api/reprises';

  constructor(private http: HttpClient) { }

  getReprise(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  createReprise(reprise: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, reprise);
  }

  updateReprise(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  deleteReprise(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  getRepriseList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }
}
