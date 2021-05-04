import { Injectable } from '@angular/core';
import {LogService} from '../shared/log.service';

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
