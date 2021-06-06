import {Component, OnInit} from '@angular/core';
import {empty, Observable, Subject} from 'rxjs';
import {CursosService} from './cursos.service';
import {Curso} from './curso';
import {catchError} from 'rxjs/operators';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {AlertModalService} from '../../../shared/alert-modal/alert-modal.service';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.css'],
  preserveWhitespaces: true,
})
export class CursosListaComponent implements OnInit {

  modalRef: BsModalRef;
  // cursos: Curso[];
  cursos$: Observable<Curso[]>;
  error$ = new Subject<boolean>();

  constructor(
    private cursoService: CursosService,
    // private modalService: BsModalService,
    // private alertModalService: AlertModalService
    ) { }

  ngOnInit(): void {
    // this.cursoService.listar()
    //   .pipe(
    //     tap(console.log)
    //   )
    //   .subscribe(dados => this.cursos = dados)
    this.onRefresh();
  }

  onRefresh() {
    this.cursos$ = this.cursoService.listar()
      .pipe(catchError(err => {
        console.log(err);
        // this.handleError();
        // this.error$.next(true);
        return empty();
      }));
    // this.cursoService.listar()
    //   .subscribe(dados => {
    //       console.log(dados);
    //     },
    //     error => {
    //       console.log('Capturando o error dentro do subscribe');
    //     },
    //     () => console.log('complete, dentro do subscribe')
    //   )
  }

  handleError() {
    // this.alertModalService.showAlertDanger('Erro ao carregar cursos. Tente novamente mais tarde!')
  }

  onEdit(id) {

  }

  onDelete(curso: any) {

  }

  onConfirmDelete() {

  }

  onDeclineDelete() {

  }
}
