import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable()
export class MainApiService {
  url = environment.apiURL;

  constructor(private http: HttpClient) {}

  fetchData<In, Out>(
    method: 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH',
    endpoint: string,
    params?: {
      [ke: string]:
        | string
        | number
        | boolean
        | readonly (string | number | boolean)[];
    },
    body?: In
  ): Observable<Out> {
    return this.http.request<Out>(method, this.url + endpoint, {
      body,
      params,
    });
  }
}
