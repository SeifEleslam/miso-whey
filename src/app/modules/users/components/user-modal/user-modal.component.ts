import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { User } from '../../../../interfaces/models/user';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrl: './user-modal.component.scss',
})
export class UserModalComponent {
  @Output() hide = new EventEmitter();
  @Output() saveSucceeded = new EventEmitter();
  @Input() header: string = 'false';
  @Input() isOpen: boolean = false;
  get user(): Partial<User> | undefined {
    return this._user;
  }
  set user(user: Partial<User>) {
    if (user) {
      this.originalUser = { ...user };
      this._user = JSON.parse(JSON.stringify(this.originalUser));
    }
  }
  isLoading = false;
  submitted = false;
  _user?: Partial<User>;
  originalUser?: Partial<User>;
  userForm = new FormGroup({
    url: new FormControl(),
    name: new FormControl(''),
    userName: new FormControl(''),
    email: new FormControl(''),
    password: new FormControl(''),
  });
  hideDialog() {
    this.hide.emit();
    this.submitted = false;
    this.userForm.reset(this.originalUser);
  }
  submit() {
    console.log(this.userForm);
  }
}
