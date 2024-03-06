import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../localstorage.service';
import { MainApiService } from './main.api.service';
import { Login, LoginOut } from '../../interfaces/models/auth';

@Injectable()
export class AuthService {
  loginEP = 'Auth/login';

  constructor(
    private http: HttpClient,
    private router: Router,
    private localstorage: LocalStorageService,
    private api: MainApiService
  ) {}

  login({ email, password }: Login) {
    return this.api.fetchData<Login, LoginOut>(
      'POST',
      this.loginEP,
      undefined,
      {
        email,
        password,
      }
    );
  }

  logout() {
    this.localstorage.removeToken();
    this.localstorage.removeUser();
    this.router.navigate(['login']);
  }
}
