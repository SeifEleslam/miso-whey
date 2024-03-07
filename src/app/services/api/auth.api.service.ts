import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LocalStorageService } from '../localstorage.service';
import { MainApiService } from './main.api.service';
import { Login, LoginOut } from '../../interfaces/models/auth';

@Injectable()
export class AuthService {
  loginEP = 'Auth/login';

  constructor(private api: MainApiService) {}

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
}
