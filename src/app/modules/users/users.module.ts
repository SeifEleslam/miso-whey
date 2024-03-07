import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { routes } from './users.routes';
import { provideRouter } from '@angular/router';
import { ParamsService } from '../../services/params.service';
import { UsersApiService } from '../../services/api/users.api.service';
import { ListUsersComponent } from './list-users/list-users.component';
import { UserModalComponent } from './components/user-modal/user-modal.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ListUsersComponent, UserModalComponent],
  providers: [provideRouter(routes), ParamsService, UsersApiService],
  imports: [SharedModule, ReactiveFormsModule],
})
export class UsersModule {}
