import { Injectable } from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {AlertModalComponent} from './alert-modal.component';
import {ConfirmModalComponent} from '../confirm-modal/confirm-modal.component';

export enum AlertType {
  DANGER = 'danger',
  SUCCESS = 'success'
}


@Injectable({
  providedIn: 'root',
})
export class AlertModalService {

  constructor(private modalService: BsModalService) { }

  private showAlert(message: string, type: string) {
    const modalRef: BsModalRef = this.modalService.show(AlertModalComponent);
    modalRef.content.type = 'danger';
    modalRef.content.message = message;
  }

  showAlertDanger(message: string) {
    this.showAlert(message, AlertType.DANGER);
  }

  showAlertSuccess(message: string) {
    this.showAlert(message, AlertType.SUCCESS);
  }

  showConfirm(title: string, messagem: string, okTxt?: string, cancelTxt?: string) {
    const modalRef: BsModalRef = this.modalService.show(ConfirmModalComponent);
    modalRef.content.title = title;
    modalRef.content.messagem = messagem;

    if(okTxt) {
      modalRef.content.okTxt = okTxt;
    }

    if(cancelTxt) {
      modalRef.content.cancelTxt = cancelTxt;
    }

  }

}
