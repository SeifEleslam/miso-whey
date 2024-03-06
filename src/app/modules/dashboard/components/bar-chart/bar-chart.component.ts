import {
  Component,
  ElementRef,
  AfterViewInit,
  ViewChild,
  OnInit,
} from '@angular/core';
import { ChartConfiguration, ChartData, ChartType } from 'chart.js';
import Chart from 'chart.js/auto';
import {
  BAR_CHART_OPTIONS,
  FINANCIAL_CHART_DATA,
} from '../../../../interfaces/consts/charts';
import { ChartsApiService } from '../../../../services/api/charts.api.service';
@Component({
  selector: 'app-bar-chart',
  templateUrl: './bar-chart.component.html',
  styleUrl: './bar-chart.component.scss',
})
export class BarChartComponent implements AfterViewInit, OnInit {
  constructor(private charts: ChartsApiService) {}
  @ViewChild('barChart') barChart?: ElementRef<HTMLCanvasElement>;
  barChartData = FINANCIAL_CHART_DATA;
  barChartOptions = BAR_CHART_OPTIONS;
  chart?: Chart<'bar', (number | [number, number] | null)[], unknown>;

  ngOnInit(): void {
    this.charts.financialChartData().subscribe({
      next: (data) => {
        console.log(data);

        const revenueData = data.data.map((el) => el.revenue);
        const expenseData = data.data.map((el) => el.expense);
        const labels = data.data.map((el) => el.month);
        const controller = this.chart?.data ?? this.barChartData;
        controller.labels = labels;
        controller.datasets[0].data = expenseData;
        controller.datasets[1].data = revenueData;
        this.chart?.update();
      },
    });
  }
  ngAfterViewInit(): void {
    if (this.barChart) {
      const ctx = this.barChart.nativeElement.getContext('2d');
      this.chart = new Chart(ctx as CanvasRenderingContext2D, {
        type: 'bar', // or your chosen chart type
        data: this.barChartData,
        options: this.barChartOptions,
      });
    }
  }
}
