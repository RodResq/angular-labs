import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveRoutingModule} from './reactive.routing.module';
import { LibSearchComponent } from './lib-search/lib-search.component';



@NgModule({
  declarations: [LibSearchComponent],
  imports: [
    CommonModule,
    ReactiveRoutingModule
  ],
  exports: [LibSearchComponent]
})
export class ReactiveSearchModule { }
