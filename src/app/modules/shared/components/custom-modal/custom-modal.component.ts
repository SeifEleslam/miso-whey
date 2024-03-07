import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-custom-modal',

  templateUrl: './custom-modal.component.html',
  styleUrl: './custom-modal.component.scss',
})
export class CustomModalComponent {
  @Output() hide = new EventEmitter();
  @Output() submitForm = new EventEmitter();

  @Input() loading: boolean = false;
  @Input() visible: boolean = false;
  @Input() header?: string;
  @Input() style?: any;
  @Input() form?: FormGroup;

  constructor() {}

  hideDialog() {
    this.hide.emit();
  }

  submit() {
    this.submitForm.emit(this.form);
  }
}
