import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class FormServiceService {
  constructor(private httpClient: HttpClient) {}

  insertLead(dataForm: any): Observable<any> {
    return this.httpClient.post('http://localhost:3000/lead', dataForm);
  }
  obtainLead(): Observable<any> {
    return this.httpClient.get('http://localhost:3000/lead');
  }
  deleteLead(id: number): Observable<any> {
    return this.httpClient.delete(`http://localhost:3000/lead/${id}`);
  }
  searchLead(id: number): Observable<any> {
    return this.httpClient.get(`http://localhost:3000/lead/${id}`);
  }
  updateLead(id: number, data: any): Observable<any> {
    return this.httpClient.patch(`http://localhost:3000/lead/${id}`, data);
  }
}
