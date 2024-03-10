export interface User {
  url: string;
  email: string;
  name: string;
  userName: string;
  id: number;
  password: string;
  File: File;
}
export interface UserPost {
  url: string | null;
  Name: string;
  Email: string;
  UserName: string;
  id: number;
  Password: string;
  File: File | null;
}
