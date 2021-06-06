import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RequestHttpCursosRoutingModule } from './request-http-cursos-routing.module';
import { CursosListaComponent } from './cursos-lista/cursos-lista.component';
import {HttpClientModule} from '@angular/common/http';
import {ModalModule} from 'ngx-bootstrap/modal';
import {AlertModalComponent} from '../../shared/alert-modal/alert-modal.component';
import {SharedModule} from '../../shared/shared.module';


@NgModule({
  declarations: [
    CursosListaComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    SharedModule,
    RequestHttpCursosRoutingModule,
    ModalModule.forRoot(),
  ],
  exports: [CursosListaComponent],
  entryComponents: [AlertModalComponent]
})
export class RequestHttpCursosModule { }
