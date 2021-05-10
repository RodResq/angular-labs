import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';

const appRoutes : Routes = [
  { path: 'cursos', loadChildren: () => import('src/app/cursos/cursos.module').then(m => m.CursosModule)},
  { path: 'alunos', loadChildren: () => import('src/app/alunos/alunos.module').then(m => m.AlunosModule)},
  { path: 'login', component: LoginComponent},
  { path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
