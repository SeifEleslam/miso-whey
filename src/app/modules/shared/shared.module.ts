import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidHintComponent } from './valid-hint/valid-hint.component';
import { HttpClientModule } from '@angular/common/http';
import { MainApiService } from '../../services/api/main.api.service';

@NgModule({
  declarations: [ValidHintComponent],
  imports: [CommonModule, HttpClientModule],
  exports: [ValidHintComponent],
  providers: [MainApiService],
})
export class SharedModule {}
