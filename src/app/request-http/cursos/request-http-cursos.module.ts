import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RequestHttpCursosRoutingModule} from './request-http-cursos-routing.module';
import {CursosListaComponent} from './cursos-lista/cursos-lista.component';
import {HttpClientModule} from '@angular/common/http';
import {ModalModule} from 'ngx-bootstrap/modal';
import {SharedModule} from '../../shared/shared.module';
import { CursosFormComponent } from './cursos-form/cursos-form.component';


@NgModule({
  declarations: [
    CursosListaComponent,
    CursosFormComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RequestHttpCursosRoutingModule,
  ],
  exports: [CursosListaComponent],
})
export class RequestHttpCursosModule { }
