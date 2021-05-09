import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {CursosComponent} from './cursos/cursos.component';
import {ModuleWithProviders} from '@angular/core';
import {CursoDetalheComponent} from './curso-detalhe/curso-detalhe.component';
import {CursoNaoEncontradoComponent} from './curso-nao-encontrado/curso-nao-encontrado.component';

const appRouting : Routes = [
  { path: 'cursos', component: CursosComponent },
  { path: 'curso/:id', component: CursoDetalheComponent},
  { path: 'cursoNaoEncontrado', component: CursoNaoEncontradoComponent},
  { path: 'login', component: LoginComponent},
  { path: '', component: HomeComponent }
];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRouting);


@NgModule()
export class AppRoutingModule {

}
