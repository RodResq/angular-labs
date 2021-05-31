import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VerificalEmailService {

  constructor(private httpClient: HttpClient) { }

  verficarEmail(email: string) {
    return this.httpClient.get('./assets/dados/verificar-email.json')
  }
}
