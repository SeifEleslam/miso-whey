import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import {
  HTTP_INTERCEPTORS,
  HttpClient,
  HttpClientModule,
} from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { MainApiService } from './services/api/main.api.service';
import { AuthGuardService } from './guards/auth.guard';
import { ErrorCatchingInterceptor } from './interceptors/error-catching.interceptor';
import { AuthService } from './services/api/auth.api.service';

export const appConfig: ApplicationConfig = {
  providers: [
    AuthService,
    provideRouter(routes),
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorCatchingInterceptor,
      multi: true,
    },
    HttpClient,
    AuthGuardService,
    HttpClientModule,
  ],
};
