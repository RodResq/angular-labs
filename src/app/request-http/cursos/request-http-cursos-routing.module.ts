import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {CursosListaComponent} from './cursos-lista/cursos-lista.component';
import {CursosFormComponent} from './cursos-form/cursos-form.component';
import {CursoGuardResolve} from './guard/curso-guard.resolve';

const routes: Routes = [
  {path: '', component: CursosListaComponent},
  {path: 'novo', component: CursosFormComponent,
    resolve: {
      curso: CursoGuardResolve
    }
  },
  {path:'editar/:id', component: CursosFormComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RequestHttpCursosRoutingModule { }
