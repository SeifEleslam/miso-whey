import { User } from './user';

export interface Login {
  email: string;
  password: string;
}

export interface LoginOut {
  token: string;
  user: User;
}
