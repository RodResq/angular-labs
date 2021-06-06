import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {RequestHttpCursosRoutingModule} from './request-http-cursos-routing.module';
import {CursosListaComponent} from './cursos-lista/cursos-lista.component';
import {HttpClientModule} from '@angular/common/http';
import {CursosFormComponent} from './cursos-form/cursos-form.component';
import {ReactiveFormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    CursosListaComponent,
    CursosFormComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    RequestHttpCursosRoutingModule,
  ],
  exports: [CursosListaComponent],
})
export class RequestHttpCursosModule { }
