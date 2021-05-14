import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './guards/auth.guard';

const appRoutes : Routes = [
  { path: 'cursos',
    canActivate: [AuthGuard],
    loadChildren: () => import('src/app/cursos/cursos.module').then(m => m.CursosModule)},
  { path: 'alunos',
    canActivate: [AuthGuard],
    loadChildren: () => import('src/app/alunos/alunos.module').then(m => m.AlunosModule)},
  { path: 'login', component: LoginComponent},
  { path: '',
    canActivate: [AuthGuard],
    component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
