import { Injectable } from '@angular/core';
import { User } from '../interfaces/models/user';
import { Router } from '@angular/router';

const TOKEN = 'jwtToken';
const USER = 'user';
@Injectable({
  providedIn: 'root',
})
export class LocalStorageService {
  constructor(private router: Router) {}
  token?: string;
  user?: User;

  setToken(data: string) {
    localStorage.setItem(TOKEN, data);
    this.token = data;
  }

  getToken() {
    this.token = this.token ?? localStorage.getItem(TOKEN) ?? undefined;
    return this.token;
  }

  removeToken() {
    this.token = undefined;
    localStorage.removeItem(TOKEN);
  }

  setUser(user: User) {
    this.user = user;
    localStorage.setItem(USER, JSON.stringify(user));
  }

  getUser() {
    const user = JSON.parse(localStorage.getItem(USER) ?? '{}');
    this.user = Object.keys(user).length ? user : undefined;
    return user;
  }

  removeUser() {
    localStorage.removeItem(USER);
    this.user = undefined;
  }
  logout() {
    this.removeToken();
    this.removeUser();
    this.router.navigate(['login']);
  }
}
