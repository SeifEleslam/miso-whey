import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../../modules/shared/shared.module';
import { EMAIL_PATTERN } from '../../interfaces/consts/patterns';
import { COMPANY_LOGO } from '../../interfaces/consts/images';
import { AuthService } from '../../services/api/auth.api.service';
import { LocalStorageService } from '../../services/localstorage.service';
import { Login } from '../../interfaces/models/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, SharedModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  constructor(
    private auth: AuthService,
    private storage: LocalStorageService,
    private router: Router
  ) {}
  loginForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });
  email_pattern = EMAIL_PATTERN;
  companyLogoUrl = COMPANY_LOGO;
  onSubmit() {
    // TODO: Use EventEmitter with form value
    if (this.loginForm.invalid) return;
    console.log(this.loginForm.value);

    this.auth.login(this.loginForm.value as Login).subscribe({
      next: (val) => {
        this.storage.setToken(val.token);
        this.router.navigate(['/']);
      },
    });
  }
}
