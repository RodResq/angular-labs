import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {AlunosService} from '../alunos.service';
import {Subject} from 'rxjs';
import {takeUntil} from 'rxjs/operators';

@Component({
  selector: 'app-aluno-detalhe',
  templateUrl: './aluno-detalhe.component.html',
  styleUrls: ['./aluno-detalhe.component.css']
})
export class AlunoDetalheComponent implements OnInit, OnDestroy {

  aluno: any;

  destroy$: Subject<boolean> = new Subject<boolean>();

  constructor(
    private activatedRouter: ActivatedRoute,
    private router: Router,
    private alunoService: AlunosService
  ) { }

  ngOnInit(): void {
    this.activatedRouter.params
      .pipe(takeUntil(this.destroy$))
      .subscribe(
      (params:any) => {
        let id = params['id'];
        this.aluno = this.alunoService.getAluno(id);
      }
    )
  }

  ngOnDestroy() {
    this.destroy$.unsubscribe();
  }

  editarContato() {
    this.router.navigate(['/alunos', this.aluno.id, 'editar']);
  }
}
