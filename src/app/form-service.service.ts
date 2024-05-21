import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class FormServiceService {
  constructor(private httpClient: HttpClient) {}

  insertLead(dataForm: any): Observable<any> {
    return this.httpClient.post(environment.endpointBE + 'lead', dataForm);
  }
  obtainLead(): Observable<any> {
    return this.httpClient.get(environment.endpointBE + 'lead');
  }
  deleteLead(id: number): Observable<any> {
    return this.httpClient.delete(`${environment.endpointBE}lead/${id}`);
  }
  searchLead(id: number): Observable<any> {
    return this.httpClient.get(`${environment.endpointBE}lead/${id}`);
  }
  updateLead(id: number, data: any): Observable<any> {
    return this.httpClient.patch(`${environment.endpointBE}lead/${id}`, data);
  }
}
