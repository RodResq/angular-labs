import {NgModule} from '@angular/core';
import {AlunosComponent} from './alunos.component';
import {CommonModule} from '@angular/common';

@NgModule({
  declarations: [
    AlunosComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AlunosComponent
  ]
})
export class AlunosModule {

}
