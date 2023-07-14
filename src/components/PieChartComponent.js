import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const PieChartComponent = ({ data }) => {
  const COLORS = ["#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF"];

  return (
    <div className="">
      <PieChart width={220} height={200}>
        <Pie
        className="p-2"
          dataKey="value"
          data={data}
          cx={110}
          cy={110}
          outerRadius={70}
          fill="#8884d8"
          label
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    </div>
  );
};

export default PieChartComponent;
