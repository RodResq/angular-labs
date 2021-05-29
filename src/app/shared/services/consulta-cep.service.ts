import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConsultaCepService {

  constructor(private httpClient: HttpClient) { }

  consultaCEP(cep: string): Observable<any> {
    cep = cep.replace(/\D/g, '');

    if(cep != '') {
      let validacep = /^[0-9]{8}$/;

      if(validacep.test(cep)) {
        return this.httpClient.get<any>(`https://viacep.com.br/ws/${cep}/json`);
      };
    }
    return of({})
  }
}
