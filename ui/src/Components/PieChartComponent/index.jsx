import React, { useState, useEffect} from 'react';
import "./styles.css";
import {
    PieChart, Pie, Cell,
  } from 'recharts';
  
 // Funcion que muestra el label del gráfico adentro de cada "porción".

  const RADIAN = Math.PI / 180;

  const renderCustomizedLabel = ({
    cx, cy, midAngle, innerRadius, outerRadius, percent, index, value
  }) => {
     const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);
  
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {value}
      </text>
    );
  };
  
 

const PieChartComponent = ({ pieChartData, colors, pieChartConfig }) => {
  console.log(pieChartConfig.pieChartWidth)
    return (
      <PieChart
        width={pieChartConfig.pieChartWidth}
        height={pieChartConfig.pieChartHeight}
        margin={pieChartConfig.pieChartMargin}
      >
      <Pie
        data={pieChartData}
        labelLine={pieChartConfig.pieChartLabelLine}
        label={renderCustomizedLabel}
        fill={pieChartConfig.pieChartFill}
        innerRadius={pieChartConfig.pieChartInnerRadius}
        outerRadius={pieChartConfig.pieChartOuterRadius}
        dataKey="value"
      >
        {
          pieChartData.map((entry, index) => <Cell key={`cell-${index}`} /* fill={colors[index % colors.length]} */ />)
        }
      </Pie>
    </PieChart>
    )
}

export default PieChartComponent;