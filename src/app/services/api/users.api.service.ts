import { Injectable } from '@angular/core';
import { MainApiService } from './main.api.service';
import { Params } from '../../interfaces/models/params';
import { User } from '../../interfaces/models/user';

@Injectable()
export class UsersApiService {
  usersListEP = 'UsersApp';
  userCreateEP = 'Auth/AddUser';
  userEditEP = 'UsersApp/Edit/';
  userDelEP = 'UsersApp/';
  constructor(private api: MainApiService) {}

  listUsers(params: Partial<Params>) {
    return this.api.fetchData<Partial<Params>, User[]>(
      'POST',
      this.usersListEP,
      undefined,
      params
    );
  }
  updateUser(user: FormData) {
    let id = user.get('id');
    return this.api.fetchData<FormData, User>(
      'POST',
      id ? this.userEditEP + id : this.userCreateEP,
      undefined,
      user
    );
  }
  deleteUser(userId: number) {
    return this.api.fetchData<undefined, any>(
      'DELETE',
      this.userDelEP + userId,
      undefined,
      undefined
    );
  }
}
