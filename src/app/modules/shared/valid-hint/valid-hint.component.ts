import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-valid-hint',
  templateUrl: './valid-hint.component.html',
  styleUrl: './valid-hint.component.scss',
})
export class ValidHintComponent {
  @Input() isVisible: boolean = false;
}
