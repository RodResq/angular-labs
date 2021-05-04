import { Component, OnInit } from '@angular/core';

import { CursosService} from './cursos.service';

@Component({
  selector: 'app-servico-cursos',
  templateUrl: './servico-cursos.component.html',
  styleUrls: ['./servico-cursos.component.css']
})
export class ServicoCursosComponent implements OnInit {

  cursos: string[] = [];

  cursosService: CursosService;

  constructor() {
    this.cursosService = new CursosService();
  }

  ngOnInit(): void {
    this.cursos = this.cursosService.getCursos();
  }

}
