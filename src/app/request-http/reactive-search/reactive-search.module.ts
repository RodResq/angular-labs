import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveRoutingModule} from './reactive.routing.module';
import { LibSearchComponent } from './lib-search/lib-search.component';
import {ReactiveFormsModule} from '@angular/forms';



@NgModule({
  declarations: [LibSearchComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ReactiveRoutingModule
  ],
  exports: [LibSearchComponent]
})
export class ReactiveSearchModule { }
