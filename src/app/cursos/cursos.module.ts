import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CursosComponent} from './cursos.component';
import { CursoDetalheComponent } from './curso-detalhe/curso-detalhe.component';
import {CursosService} from '../servico-cursos/cursos.service';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    CursosComponent,
    CursoDetalheComponent
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
