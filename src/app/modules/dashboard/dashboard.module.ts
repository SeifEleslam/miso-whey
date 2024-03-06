import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { provideRouter } from '@angular/router';
import { routes } from './dashboard.routes';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { ChartsApiService } from '../../services/api/charts.api.service';
import { SharedModule } from '../shared/shared.module';
import { CurveChartComponent } from './components/curve-chart/curve-chart.component';

@NgModule({
  declarations: [DashboardComponent, BarChartComponent, CurveChartComponent],
  imports: [SharedModule],
  providers: [provideRouter(routes), ChartsApiService],
})
export class DashboardModule {}
