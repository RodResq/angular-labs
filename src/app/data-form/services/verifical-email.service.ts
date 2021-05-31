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
        tap(console.log),
        map((dados: {email: string}[]) => dados.filter(v => v.email === email)),
        tap(console.log),
        map((dados: any) => dados.length > 0),
        tap(console.log)
      );
  }
}
