import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CursosComponent} from './cursos.component';
import {CursoNaoEncontradoComponent} from './curso-nao-encontrado/curso-nao-encontrado.component';
import {CursoDetalheComponent} from './curso-detalhe/curso-detalhe.component';
import {CursosService} from './cursos.service';
import {CursosRoutingModule} from './cursos.routing.modules';

@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent,
    CursoNaoEncontradoComponent
  ],
  imports: [
    CommonModule,
    CursosRoutingModule
  ],
  exports: [
    CursosComponent
  ],
  providers: [ CursosService ]
})
export class CursosModule { }
