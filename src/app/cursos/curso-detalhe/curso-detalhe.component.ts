import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Subject, Subscription} from 'rxjs';
import {takeUntil} from 'rxjs/operators';
import {CursosService} from '../cursos.service';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit, OnDestroy {

  curso: any;
  id: number;

  // inscricao: Subscription;

  destroy$: Subject<boolean> = new Subject<boolean>();
  private nomeCurso: string;

  constructor(
    private activatedRouter: ActivatedRoute,
    private cursosService: CursosService,
    private router: Router) {
    // this.id = this.activatedRouter.snapshot.params['id'];
    // console.log(this.activatedRouter);
  }

  ngOnInit(): void {
    // this.inscricao = this.activatedRouter.params
    //   .pipe(takeUntil(this.destroy$))
    //   .subscribe(
    //   (params: any ) => {
    //     this.id = params['id'];
    //   }
    // );
    this.activatedRouter.params
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        params => {
          this.id = params['id'];
          this.curso = this.cursosService.getCurso(this.id);
          if(this.curso == null) {
            this.router.navigate(['cursoNaoEncontrado']);
          }
        }
      )
  }

  ngOnDestroy() {
    // this.inscricao.unsubscribe();
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

}
