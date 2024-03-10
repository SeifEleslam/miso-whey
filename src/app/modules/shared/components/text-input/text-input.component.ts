import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-text-input',
  templateUrl: './text-input.component.html',
  styleUrl: './text-input.component.scss',
})
export class TextInputComponent {
  @Input() pattern: RegExp | string = '.*';
  @Input() control!: FormControl<any>;
  @Input() title: string = '';
  @Input() type: string = 'text';
  @Input() required: boolean = false;
  @Input() id: string = `uniq${Math.random() * 200}`;
  @Input() submitted: boolean = false;
}
