import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-sure-modal',
  templateUrl: './sure-modal.component.html',
  styleUrl: './sure-modal.component.scss',
})
export class SureModalComponent {
  @Output() hide = new EventEmitter();
  @Output() save = new EventEmitter();
  @Input() loading: boolean = false;
  @Input() header!: string;
  @Input() visible: boolean = false;
  hideDialog() {
    this.hide.emit();
  }
}
