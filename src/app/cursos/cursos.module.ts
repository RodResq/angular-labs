import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CursosComponent} from './cursos.component';
import {CursoNaoEncontradoComponent} from './curso-nao-encontrado/curso-nao-encontrado.component';
import {CursoDetalheComponent} from './curso-detalhe/curso-detalhe.component';
import {RouterModule} from '@angular/router';
import {CursosService} from './cursos.service';

@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    CursosComponent
  ],
  providers: [ CursosService ]
})
export class CursosModule { }
