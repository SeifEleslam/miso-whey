import { Routes } from '@angular/router';
import { AuthGuardService } from '../../guards/auth.guard';
import { ListUsersComponent } from './list-users/list-users.component';

export const routes: Routes = [
  {
    path: '',
    component: ListUsersComponent,
    canActivate: [AuthGuardService],
  },
];
