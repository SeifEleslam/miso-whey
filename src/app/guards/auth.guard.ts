import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { LocalStorageService } from '../services/localstorage.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  constructor(
    private router: Router,
    private localstorage: LocalStorageService
  ) {}

  async canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    const token = this.localstorage.getToken();
    if (!token && !state.url.includes('login'))
      return this.router.parseUrl('login');
    else if (token && state.url.includes('login'))
      return this.router.parseUrl('/');
    return true;
  }
}
