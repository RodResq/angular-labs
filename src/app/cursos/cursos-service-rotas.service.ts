import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosServiceRotasService {

  constructor() { }

  getCursosParaRotas() {
    return [
      {id: 1, nome: 'Angular'},
      {id: 2, nome: 'Java'}
    ]
  }
}
