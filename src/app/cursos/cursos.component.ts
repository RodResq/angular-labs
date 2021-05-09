import { Component, OnInit } from '@angular/core';
import {CursosService} from '../servico-cursos/cursos.service';
import {CursosServiceRotasService} from './cursos-service-rotas.service';
import {ActivatedRoute} from '@angular/router';
import {takeUntil} from 'rxjs/operators';
import {Subject} from 'rxjs';

@Component({
  selector: 'cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css'],
  providers: [ CursosService ]
})
export class CursosComponent implements OnInit {

  nomePortal: string;

  cursos: any[];

  pagina: number;
  private destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private cursoService: CursosService,
    private cursoServiceRotas: CursosServiceRotasService,
    private activatedRouter: ActivatedRoute) {
    this.nomePortal = 'http://loiane.training';

  }


  ngOnInit(): void {
    // this.cursos = this.cursoService.getCursos();
    // this.cursoService.emitirCursoCriado.subscribe(curso => {
    //   console.log(curso);
    // })
    this.cursos = this.cursoServiceRotas.getCursosParaRotas();
    this.activatedRouter.queryParams
      .pipe(takeUntil(this.destroy$))
      .subscribe(
      (queryParams) => this.pagina = queryParams['pagina'])
  }

  ngOnDestroy() {
    this.destroy$.unsubscribe();
  }

}
