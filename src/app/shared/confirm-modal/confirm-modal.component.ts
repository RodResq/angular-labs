import {Component, Input, OnInit} from '@angular/core';
import {BsModalRef} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-confirm-modal',
  templateUrl: './confirm-modal.component.html',
  styleUrls: ['./confirm-modal.component.css']
})
export class ConfirmModalComponent implements OnInit {

  @Input() titulo: string;
  @Input() messagem: string;
  @Input() cancelTxt = 'Cancelar';
  @Input() okTxt = 'Sim';

  constructor(public bsModalRef: BsModalRef) { }

  ngOnInit(): void {
  }


  onClose() {
    this.bsModalRef.hide();
  }

  onConfirm() {

  }
}
