import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {CursosComponent} from './cursos/cursos.component';
import {ModuleWithProviders} from '@angular/core';
import {CursoDetalheComponent} from './cursos/curso-detalhe/curso-detalhe.component';
import {CursoNaoEncontradoComponent} from './cursos/curso-nao-encontrado/curso-nao-encontrado.component';
import {RequestHttpCursosModule} from './request-http-cursos/request-http-cursos.module';

const APP_ROUTES : Routes = [
  // Porjeto Anterior
  // { path: 'cursos', component: CursosComponent },
  // { path: 'curso/:id', component: CursoDetalheComponent},
  // { path: 'cursoNaoEncontrado', component: CursoNaoEncontradoComponent},
  // { path: 'login', component: LoginComponent},
  // { path: '', component: HomeComponent }
  // Projeto request http

];

export const routing: ModuleWithProviders<any> = RouterModule.forRoot(APP_ROUTES);
