import { Injectable } from '@angular/core';
import { MainApiService } from './main.api.service';
import { Params } from '../../interfaces/models/params';

@Injectable()
export class UsersApiService {
  usersListEP = 'UsersApp';
  constructor(private api: MainApiService) {}

  listUsers(params: Partial<Params>) {
    return this.api.fetchData<Partial<Params>, any>(
      'POST',
      this.usersListEP,
      undefined,
      params
    );
  }
}
