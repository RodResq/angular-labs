import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class CursosService {

  emitirCursoCriado = new EventEmitter<string>();
  static criarNovoCurso = new EventEmitter<string>(); // Importantissimo

  cursos: string[] = ['Angular 2', 'Java', 'PhoneGap'];

  constructor() {
    console.log('CursoService');
  }
  getCursos () {
    return this.cursos;
  }

  criarCurso(curso: string) {
    this.cursos.push(curso);
    this.emitirCursoCriado.emit(curso);
    CursosService.criarNovoCurso.emit(curso);
  }
}
