export const FINANCIAL_CHART_DATA = {
  labels: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  datasets: [
    {
      label: 'Expense',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderRadius: 999,
      tension: 0.3,
    },
    {
      label: 'Revenue',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgba(54, 162, 235, 1)',
      borderRadius: 999,
      tension: 0.3,
    },
  ],
};

export const BAR_CHART_OPTIONS = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      stacked: false,
    },
    y: {
      stacked: false,
    },
  },
  plugins: {
    legend: {
      display: true,
    },
  },
};

export const USER_CHART_DATA = {
  labels: [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ],
  datasets: [
    {
      label: 'Users',
      data: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgba(255, 99, 132, 1)',
      borderRadius: 999,
      tension: 0.3,
      fill: true,
    },
  ],
};

export const LINE_CHART_OPTIONS = {
  responsive: true,
  maintainAspectRatio: false,
  scales: {
    x: {
      stacked: false,
    },
    y: {
      stacked: false,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
  },
};
