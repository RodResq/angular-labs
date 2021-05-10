import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {CursosComponent} from './cursos.component';
import {CursoNaoEncontradoComponent} from './curso-nao-encontrado/curso-nao-encontrado.component';
import {CursoDetalheComponent} from './curso-detalhe/curso-detalhe.component';

const appRoutes : Routes = [
  { path: '', component: CursosComponent },
  { path: 'naoEncontrado', component: CursoNaoEncontradoComponent},
  { path: ':id', component: CursoDetalheComponent},
];

@NgModule({
  imports: [RouterModule.forChild(appRoutes)],
  exports: [RouterModule]
})
export class CursosRoutingModule { }
