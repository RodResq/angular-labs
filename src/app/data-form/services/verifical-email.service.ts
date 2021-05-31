import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VerificalEmailService {

  constructor(private httpClient: HttpClient) { }

  verficarEmail(email: string) {
    return this.httpClient.get('./assets/dados/verifica-email.json')
      .pipe(
        map((dados: {emails: any[]}) => dados.emails),
        tap(dados => console.log(dados))
      );
  }
}
