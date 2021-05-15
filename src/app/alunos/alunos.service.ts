import { Injectable } from '@angular/core';
import {Aluno} from './aluno';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {

  private alunos: Aluno[] = [
    {id: 1, nome: 'Alunos 01', email: 'aluno01@email.com'},
    {id: 2, nome: 'Alunos 02', email: 'aluno02@email.com'},
    {id: 3, nome: 'Alunos 03', email: 'aluno03@email.com'}
  ]

  getAlunos() {
    return this.alunos;
  }

  constructor() { }

  getAluno(id: number) {
    let alunos = this.getAlunos();
    for (let aluno of alunos) {
      if(aluno.id == id) {
        return aluno;
      }
    }
    return null;
  }
}
