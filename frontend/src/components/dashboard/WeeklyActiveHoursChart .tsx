import React from 'react';
import { Bar } from 'react-chartjs-2';
import 'chart.js/auto';

const data = {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
  datasets: [
    {
      label: 'Weekly Active Hours',
      data: [8, 6, 7, 9, 5, 3, 4], // Replace with your actual data
      backgroundColor: [
        'purple', // Purple shade for Monday
      ],
      borderColor: 'rgba(102, 51, 153, 1)', // Dark purple border color
      borderWidth: 1,
    },
  ],
};

const WeeklyActiveHoursChart = () => {
  return (
    <div>
      <h2>Weekly Active Hours</h2>
      <Bar data={data} />
    </div>
  );
};

export default WeeklyActiveHoursChart;