import { Injectable } from '@angular/core';
import {BsModalRef, BsModalService} from 'ngx-bootstrap/modal';
import {AlertModalComponent} from './alert-modal.component';

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
}
