import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CursosService {

  cursos: string[] = ['Java', 'Angular', 'Ext Js']

  constructor() { }

  getCursos(): string[] {
    return this.cursos;
  }
}
