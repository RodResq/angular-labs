import { Injectable } from '@angular/core';
import {LogService} from '../shared/log.service';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  constructor() { }

  getCursos() {
    return [
      {id: 1, nome: 'Angular'},
      {id: 2, nome: 'Java'}
    ]
  }

  getCurso(id: number): any {
    let cursos = this.getCursos();
    // for (let i = 0; i < cursos.length; i++) {
    //   let curso =  cursos[i];
    //   if(curso.id == id) {
    //     return curso;
    //   }
    // }
    // return null;

    for (let curso of cursos) {
      if(curso.id == id)
        return curso
    }
    return null;
  }
}
