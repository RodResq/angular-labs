import { Component, OnInit } from '@angular/core';
import {Subject} from 'rxjs';
import {ActivatedRoute} from '@angular/router';
import {AlunosService} from '../alunos.service';
import {takeUntil} from 'rxjs/operators';
import {getLocaleFirstDayOfWeek} from '@angular/common';
import {IFormCandeactivate} from '../../guards/IFormCandeactivate';

@Component({
  selector: 'app-aluno-form',
  templateUrl: './aluno-form.component.html',
  styleUrls: ['./aluno-form.component.css']
})
export class AlunoFormComponent implements OnInit, IFormCandeactivate {

  aluno: any;

  destroy$: Subject<boolean> = new Subject<boolean>();

  private formMudou: boolean = false;

  constructor(
    private activatedRouter: ActivatedRoute,
    private alunoService: AlunosService
  ) { }

  ngOnInit(): void {
    this.activatedRouter.params
      .pipe(takeUntil(this.destroy$))
      .subscribe(
        (params:any) => {
          let id: number = params['id'];
          this.aluno = this.alunoService.getAluno(id);
          this.aluno == null ? {} : this.aluno;
        }
      )
  }

  podeMudar(): boolean {
    if(this.formMudou) {
      confirm('Tem certeza que quer mudar de pagina ?');
    }
    return true;
  };

  onInput() {
    this.formMudou = true;
    console.log('mudou');
  }

  podeDesativar() {
    this.podeMudar();
  }
}
