import { NgModule } from '@angular/core';
import { DashboardComponent } from './dashboard/dashboard.component';
import { provideRouter } from '@angular/router';
import { routes } from './dashboard.routes';
import { BarChartComponent } from './components/bar-chart/bar-chart.component';
import { ChartsApiService } from '../../services/api/charts.api.service';
import { SharedModule } from '../shared/shared.module';
import { CurveChartComponent } from './components/curve-chart/curve-chart.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { LocationsMapComponent } from './components/locations-map/locations-map.component';
import { LocationsApiService } from '../../services/api/locations.api.service';

@NgModule({
  declarations: [
    LocationsMapComponent,
    DashboardComponent,
    BarChartComponent,
    CurveChartComponent,
  ],
  imports: [SharedModule, GoogleMapsModule],
  providers: [provideRouter(routes), ChartsApiService, LocationsApiService],
})
export class DashboardModule {}
