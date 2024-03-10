import { Injectable } from '@angular/core';
import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { AuthService } from '../services/api/auth.api.service';
import { LocalStorageService } from '../services/localstorage.service';

@Injectable()
export class ErrorCatchingInterceptor implements HttpInterceptor {
  constructor(private storage: LocalStorageService) {}
  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        switch (error.status) {
          case 401:
            this.storage.logout();
            break;
        }
        return throwError(() => error);
      })
    );
  }
}
