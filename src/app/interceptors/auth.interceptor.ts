import {
  HttpHandler,
  HttpRequest,
  HttpInterceptor,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LocalStorageService } from '../services/localstorage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private localstorageToken: LocalStorageService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler) {
    const token = this.localstorageToken.getToken();
    const isAPIUrl = request.url.includes('/api');
    if (token && isAPIUrl) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
        },
      });
    }
    return next.handle(request);
  }
}
