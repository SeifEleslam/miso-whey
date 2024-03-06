import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { routes } from './users.routes';
import { provideRouter } from '@angular/router';

@NgModule({
  declarations: [],
  providers: [provideRouter(routes)],
  imports: [SharedModule],
})
export class UsersModule {}
