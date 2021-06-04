import { Injectable } from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EnviarValorService {

  private emissor$ = new Subject();

  constructor() { }

  emitirValor(valor) {
    this.emissor$.next(valor);
  }
}
