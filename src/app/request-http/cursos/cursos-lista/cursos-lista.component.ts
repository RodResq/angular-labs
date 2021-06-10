import {Component, OnInit, ViewChild} from '@angular/core';
import {EMPTY, empty, Observable, Subject} from 'rxjs';
import {Curso} from './curso';
import {catchError, switchMap, take} from 'rxjs/operators';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {AlertModalService} from '../../../shared/alert-modal/alert-modal.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Curso2Service} from '../curso2.service';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.css'],
  preserveWhitespaces: true,
})
export class CursosListaComponent implements OnInit {

  // modalRef: BsModalRef;
  // cursos: Curso[];
  error$ = new Subject<boolean>();
  cursos$: Observable<Curso[]>;
  @ViewChild('deleteModal') deleteModalView;
  deleteModalReef: BsModalRef;
  curso: Curso;

  constructor(
    private cursoService: Curso2Service,
    private modalService: BsModalService,
    private alertService: AlertModalService,
    private router: Router,
    private activatedRouter: ActivatedRoute,
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
        this.handleError();
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
    this.alertService.showAlertDanger('Erro ao carregar cursos. Tente novamente mais tarde.');
  }

  onEdit(id) {
    this.router.navigate(['editar', id], { relativeTo: this.activatedRouter })
  }

  onDelete(curso) {
    this.curso = curso;
    // this.deleteModalReef = this.modalService.show(this.deleteModalView, {class: 'modal-sm'});
    const retorno$ = this.alertService.showConfirm('Confirmacao', 'Tem certeza que deseja remover esse curso ?');
    retorno$.asObservable().pipe(
      take(1),
      switchMap(result => result ? this.cursoService.delete(curso.id): EMPTY)
    )
      .subscribe(
        success => {
          this.onRefresh();
        },
        error => {
          this.alertService.showAlertDanger('Error ao remover curso. Tente novamente mais tarde!');
        }
      )
  }

  onConfirmDelete() {
    this.cursoService.delete(this.curso.id).subscribe(
      success => {
        console.log('Curso deletado com sucesso');
        this.onRefresh()
      },
      error => {
        this.alertService.showAlertDanger('Error ao remover curso. Tente novamente mais tarde!');
      }
    )
  }

  onDeclineDelete() {
    this.deleteModalReef.hide();
  }
}
