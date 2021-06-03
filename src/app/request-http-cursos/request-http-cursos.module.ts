import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestHttpCursosRoutingModule } from './request-http-cursos-routing.module';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';


@NgModule({
  declarations: [CursosListaComponent],
  imports: [
    CommonModule,
    RequestHttpCursosRoutingModule
  ],
  exports: [CursosListaComponent]
})
export class RequestHttpCursosModule { }
