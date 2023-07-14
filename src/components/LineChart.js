import React from 'react';
import LineChartComponent from './LineChartComponent';


const LineChart = () => {
  const lineChartData = [
    { label: 'January', sales: 500, profit: 200 },
    { label: 'February', sales: 800, profit: 300 },
    { label: 'March', sales: 200, profit: 100 },
    { label: 'April', sales: 1000, profit: 600 },
    { label: 'May', sales: 600, profit: 400 },
    { label: 'June', sales: 900, profit: 500 },
  ];

  return (
    <div className='bg-white rounded-xl p-4'>
      <h1 className="text-xl font-semibold m-1">Activities</h1>
      <LineChartComponent data={lineChartData} />
    </div>
  );
};

export default LineChart;