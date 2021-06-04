import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {CursosService} from './cursos.service';
import {Curso} from './curso';
import {tap} from 'rxjs/operators';

@Component({
  selector: 'app-cursos-lista',
  templateUrl: './cursos-lista.component.html',
  styleUrls: ['./cursos-lista.component.css'],
  preserveWhitespaces: true
})
export class CursosListaComponent implements OnInit {

  cursos$: Observable<any>;

  cursos: Curso[];

  constructor(private cursoService: CursosService) { }

  ngOnInit(): void {
    this.cursoService.listar()
      .pipe(
        tap(console.log)
      )
      .subscribe(dados => this.cursos = dados)
  }

  onRefresh() {

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
