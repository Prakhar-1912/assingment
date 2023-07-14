import React from 'react';
import PieChartComponent from './PieChartComponent';


const PieChart = () => {
  const pieChartData = [
    { name: 'Red', value: 12 },
    { name: 'Blue', value: 19 },
    { name: 'Yellow', value: 3 },
    { name: 'Green', value: 5 },
    { name: 'Purple', value: 2 },
  ];

  return (
    <div className='w-1/2'>
      <h1 className="text-xl font-semibold">Top Products</h1>
      <PieChartComponent data={pieChartData} />
    </div>
  );
};

export default PieChart;