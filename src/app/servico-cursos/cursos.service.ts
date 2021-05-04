import {Injectable} from '@angular/core';

@Injectable()
export class CursosService {

  cursos: string[] = ['Angular 2', 'Java', 'PhoneGap'];

  constructor() {
    console.log('CursoService');
  }
  getCursos () {
    return this.cursos;
  }

  criarCurso(curso: string) {
    this.cursos.push(curso);
  }
}
