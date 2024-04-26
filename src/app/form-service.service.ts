import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FormServiceService {

  constructor(private httpClient: HttpClient) { }

  backForm (dataForm: any): Observable<any> {
return this.httpClient.post('https://test-api.mcsmart.it/web/index.php?r=serviziobollette/mc-marketing/create-lead', dataForm)
  }
}
