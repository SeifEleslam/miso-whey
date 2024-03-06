import { Injectable } from '@angular/core';
import { MainApiService } from './main.api.service';
import {
  FinancialChartAPIData,
  UsersChartAPIData,
} from '../../interfaces/models/charts';

@Injectable()
export class ChartsApiService {
  financialEP = 'Statistics/GetFinancialStatistics';
  usersChartEP = 'Statistics/GetUsersStatistics';
  constructor(private api: MainApiService) {}

  financialChartData() {
    return this.api.fetchData<undefined, FinancialChartAPIData>(
      'GET',
      this.financialEP,
      undefined,
      undefined
    );
  }
  usersChartData() {
    return this.api.fetchData<undefined, UsersChartAPIData>(
      'GET',
      this.usersChartEP,
      undefined,
      undefined
    );
  }
}
