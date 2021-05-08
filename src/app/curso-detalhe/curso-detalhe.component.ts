import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Subject, Subscription} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-curso-detalhe',
  templateUrl: './curso-detalhe.component.html',
  styleUrls: ['./curso-detalhe.component.css']
})
export class CursoDetalheComponent implements OnInit, OnDestroy {

  id: string;

  // inscricao: Subscription;

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(private activatedRouter: ActivatedRoute) {
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
        params => this.id = params['id']
      )
  }

  ngOnDestroy() {
    // this.inscricao.unsubscribe();
    this.destroy$.next();
    this.destroy$.unsubscribe();
  }

}
