import {
  Component,
  ElementRef,
  AfterViewInit,
  ViewChild,
  OnInit,
} from '@angular/core';
import Chart from 'chart.js/auto';
import {
  LINE_CHART_OPTIONS,
  USER_CHART_DATA,
} from '../../../../interfaces/consts/charts';
import { ChartsApiService } from '../../../../services/api/charts.api.service';

@Component({
  selector: 'app-curve-chart',
  templateUrl: './curve-chart.component.html',
  styleUrl: './curve-chart.component.scss',
})
export class CurveChartComponent implements AfterViewInit, OnInit {
  constructor(private charts: ChartsApiService) {}
  @ViewChild('barChart') barChart?: ElementRef<HTMLCanvasElement>;
  barChartData = USER_CHART_DATA;
  barChartOptions = LINE_CHART_OPTIONS;
  chart?: Chart<'line', (number | [number, number] | null)[], unknown>;

  ngOnInit(): void {
    this.charts.usersChartData().subscribe({
      next: (data) => {
        const users = data.data.map((el) => el.numberOfUsers);
        const labels = data.data.map((el) => el.month);
        const controller = this.chart?.data ?? this.barChartData;
        controller.labels = labels;
        controller.datasets[0].data = users;
        this.chart?.update();
      },
    });
  }
  ngAfterViewInit(): void {
    if (this.barChart) {
      const ctx = this.barChart.nativeElement.getContext('2d');
      this.chart = new Chart(ctx as CanvasRenderingContext2D, {
        type: 'line', // or your chosen chart type
        data: this.barChartData,
        options: this.barChartOptions,
      });
    }
  }
}
