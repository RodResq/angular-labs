import { Component, OnInit } from '@angular/core';
import {CursosService} from '../servico-cursos/cursos.service';
import {CursosServiceRotasService} from './cursos-service-rotas.service';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [ CursosService ]
})
export class CursosComponent implements OnInit {

  nomePortal: string;

  cursos: any[];

  constructor(private cursoService: CursosService, private cursoServiceRotas: CursosServiceRotasService) {
    this.nomePortal = 'http://loiane.training';

  }


  ngOnInit(): void {
    // this.cursos = this.cursoService.getCursos();
    // this.cursoService.emitirCursoCriado.subscribe(curso => {
    //   console.log(curso);
    // })
    this.cursos = this.cursoServiceRotas.getCursosParaRotas();
  }

}
