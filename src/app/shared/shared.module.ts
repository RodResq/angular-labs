import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormDebugComponent} from './form-debug/form-debug.component';
import {CampoControlErroComponent} from './campo-control-erro/campo-control-erro.component';
import {DropdownService} from './services/dropdown.service';
import { ErrorMsgComponent } from './error-msg/error-msg.component';
import { InputFieldComponent } from './input-field/input-field.component';
import {FormsModule} from '@angular/forms';
import {BaseFormComponent} from './base-form/base-form.component';
import { AlertModalComponent } from './alert-modal/alert-modal.component';
import { ConfirmModalComponent } from './confirm-modal/confirm-modal.component';



@NgModule({
  declarations: [
    FormDebugComponent,
    CampoControlErroComponent,
    ErrorMsgComponent,
    InputFieldComponent,
    AlertModalComponent,
    ConfirmModalComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    FormDebugComponent,
    CampoControlErroComponent,
    ErrorMsgComponent,
    InputFieldComponent,
    AlertModalComponent
  ],
  providers: [
    DropdownService
  ]
})
export class SharedModule { }
