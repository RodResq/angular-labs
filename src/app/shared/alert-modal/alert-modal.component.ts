import {Component, Input, OnInit} from '@angular/core';
import {BsModalService} from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-alert-modal',
  templateUrl: './alert-modal.component.html',
  styleUrls: ['./alert-modal.component.css']
})
export class AlertModalComponent implements OnInit {

  @Input() message = 'success';
  @Input() type: string;

  constructor(private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  onClose() {
    this.modalService.hide()
  }
}
