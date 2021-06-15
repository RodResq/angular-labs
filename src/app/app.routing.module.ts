import {NgModule} from '@angular/core';

import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from './login/login.component';
import {HomeComponent} from './home/home.component';
import {AuthGuard} from './guards/auth.guard';
import {CursosGuard} from './guards/cursos.guard';
import {AlunosGuard} from './guards/alunos.guard';
import {PaginaNaoEcontradaComponent} from './pagina-nao-econtrada/pagina-nao-econtrada.component';
import {TemplateFormComponent} from './template-form/template-form.component';
import {DataFormComponent} from './data-form/data-form.component';
import {RequestHttpCursosModule} from './request-http/cursos/request-http-cursos.module';
import {UnsubscribeRxjsModule} from './request-http/unsubscribe-rxjs/unsubscribe-rxjs.module';
import {UploadFileModule} from './upload-file/upload-file.module';
import {ReactiveSearchModule} from './request-http/reactive-search/reactive-search.module';

const appRoutes : Routes = [
  //##################### Modulo de Formulario ##########################################
  // { path: 'templateForm', component: TemplateFormComponent},
  // { path: 'dataForm', component: DataFormComponent},
  // { path: '', redirectTo: 'dataForm', pathMatch: 'full'}

  // #################### Alteracoes ate o module de rotas ##############################
  // { path: 'cursos',
  //   canActivate: [AuthGuard],
  //   canActivateChild: [CursosGuard],
  //   canLoad: [AuthGuard],
  //   loadChildren: () => import('src/app/cursos/cursos.module').then(m => m.CursosModule)},
  // { path: 'alunos',
  //   canActivate: [AuthGuard],
  //   canLoad: [AuthGuard],
  //   // canActivateChild: [AlunosGuard],
  //   loadChildren: () => import('src/app/alunos/alunos.module').then(m => m.AlunosModule)},
  // { path: 'login', component: LoginComponent},
  // { path: 'home', canActivate: [AuthGuard], component: HomeComponent},
  // { path: '', redirectTo: '/home', pathMatch: 'full'},
  // { path: '**', component: PaginaNaoEcontradaComponent,
  //   // canActivate: [AuthGuard] //redireciona para pagina de login caso nao encontre a pagina!
  // }

  // Projeto request http
  {path: '', pathMatch: 'full', redirectTo: 'busca-reativa'},
  {path: 'cursos', loadChildren: () => RequestHttpCursosModule},
  {path: 'rxjs-poc', loadChildren: () => UnsubscribeRxjsModule},
  {path: 'upload', loadChildren: () => UploadFileModule},
  {path: 'busca-reativa', loadChildren: () => ReactiveSearchModule}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
