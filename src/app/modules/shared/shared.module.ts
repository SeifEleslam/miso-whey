import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ValidHintComponent } from './components/custom-modal/valid-hint/valid-hint.component';
import { HttpClientModule } from '@angular/common/http';
import { MainApiService } from '../../services/api/main.api.service';
import { CustomTableComponent } from './components/custom-table/custom-table.component';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { AuthService } from '../../services/api/auth.api.service';
import { CustomModalComponent } from './components/custom-modal/custom-modal.component';
import { DialogModule } from 'primeng/dialog';
@NgModule({
  declarations: [
    ValidHintComponent,
    CustomTableComponent,
    CustomModalComponent,
  ],
  imports: [
    DialogModule,
    CardModule,
    InputTextModule,
    ButtonModule,
    CommonModule,
    HttpClientModule,
    TableModule,
  ],
  exports: [
    CommonModule,
    ValidHintComponent,
    CustomTableComponent,
    CustomModalComponent,
  ],
  providers: [MainApiService, AuthService],
})
export class SharedModule {}
