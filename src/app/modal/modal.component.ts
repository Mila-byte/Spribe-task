import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Output() confirmAction = new EventEmitter<boolean>();

  confirm() {
    this.confirmAction.emit(true)
  }

  cancel() {
    this.confirmAction.emit(false)
  }
}
