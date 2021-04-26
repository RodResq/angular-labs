import { Component, OnInit } from '@angular/core';
import {CursosService} from './cursos.service';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {

  nomePortal: string;

  cursos: string[];

  constructor(private cursoService: CursosService) {
    this.nomePortal = 'http://loiane.training';

    this.cursos = this.cursoService.getCursos();
  }

  ngOnInit(): void {
  }

}
