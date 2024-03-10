import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { User, UserPost } from '../../../../interfaces/models/user';
import { EMAIL_PATTERN } from '../../../../interfaces/consts/patterns';
import { Subscription } from 'rxjs';
import { UtilsService } from '../../../../services/utils.service';
import { UsersApiService } from '../../../../services/api/users.api.service';

@Component({
  selector: 'app-user-modal',
  templateUrl: './user-modal.component.html',
  styleUrl: './user-modal.component.scss',
})
export class UserModalComponent implements OnInit {
  constructor(
    private utils: UtilsService,
    private userService: UsersApiService
  ) {}
  @Output() hide = new EventEmitter();
  @Output() saveSucceeded = new EventEmitter();
  @Input() header: string = '';
  @Input() isOpen: boolean = false;
  @Input() get approach(): 'create' | 'edit' | 'show' | undefined {
    return this._approach;
  }
  set approach(approach) {
    this._approach = approach;
    this.userForm.enable();
    if (approach === 'show') this.userForm.disable();
    if (approach === 'edit') this.userForm.controls['UserName'].disable();
  }
  @Input() get user(): Partial<User> | undefined {
    return this._user;
  }
  set user(user: Partial<User> | undefined) {
    this._user = user;

    if (user)
      this.originalUser = {
        url: user.url,
        Name: user.name,
        Email: user.email,
        UserName: user.userName,
        id: user.id,
        Password: '',
        File: null,
      };
    this.userForm.setValue({
      url: user?.url ?? null,
      File: null,
      Name: user?.name ?? '',
      UserName: user?.userName ?? '',
      Email: user?.email ?? '',
      Password: '',
    });
  }

  _approach?: 'create' | 'edit' | 'show';
  email_pattern = EMAIL_PATTERN;
  isLoading = false;
  submitted = false;
  imageURL?: string;
  noChange: boolean = false;
  originalUser?: Partial<UserPost>;
  _user?: Partial<User>;

  userForm = new FormGroup({
    url: new FormControl<string>(''),
    File: new FormControl<string | File>(''),
    Name: new FormControl<string>(''),
    UserName: new FormControl<string>(''),
    Email: new FormControl<string>('', [
      Validators.required,
      Validators.email,
      Validators.pattern(this.email_pattern),
    ]),
    Password: new FormControl<string>(''),
  });

  formTracker?: Subscription;

  ngOnInit(): void {
    this.formTracker = this.userForm.valueChanges.subscribe({
      next: (val) => {
        if (this._approach === 'show' || !this.originalUser) return;
        this.noChange =
          Object.keys(this.utils.getObjectDifference(this.originalUser, val))
            .length < 3;
      },
    });
  }
  uploadImg(event: any) {
    const file: File = event.target.files[0];
    if (!file || !file.type.includes('image')) {
      return;
    }
    if (file) {
      this.userForm.setControl('File', new FormControl(file));
      const reader = new FileReader();
      reader.onload = () => {
        this.imageURL = reader.result as string;
      };
      reader.readAsDataURL(this.userForm.value['File'] as File);
    }
  }
  removeImg() {
    this.userForm.setControl('File', new FormControl(null));
    this.userForm.setControl('url', new FormControl(null));
    this.imageURL = undefined;
  }
  hideDialog() {
    this.hide.emit();
    this.submitted = false;
    this.userForm.reset(this.originalUser);
  }
  submit() {
    this.submitted = true;
    if (!this.userForm.valid) return;
    const data = this.utils.convertObjToForm(
      { id: this.user?.id, ...this.userForm.value },
      ['File']
    );

    this.isLoading = true;

    this.userService
      .updateUser(data)
      .subscribe({
        next: () => {
          this.hideDialog();
          this.saveSucceeded.emit();
        },
      })
      .add(() => (this.isLoading = false));
  }
}
