import { APIStandard } from './apiStandard';

interface FinancialChartData {
  month: string;
  expense: number;
  revenue: number;
}

export interface FinancialChartAPIData extends APIStandard {
  data: FinancialChartData[];
}

interface UsersChartData {
  month: string;
  numberOfUsers: number;
  id: number;
}

export interface UsersChartAPIData extends APIStandard {
  data: UsersChartData[];
}
