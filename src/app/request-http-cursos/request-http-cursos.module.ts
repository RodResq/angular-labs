import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestHttpCursosRoutingModule } from './request-http-cursos-routing.module';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';
import {HttpClientModule} from '@angular/common/http';


@NgModule({
  declarations: [CursosListaComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    RequestHttpCursosRoutingModule
  ],
  exports: [CursosListaComponent]
})
export class RequestHttpCursosModule { }
