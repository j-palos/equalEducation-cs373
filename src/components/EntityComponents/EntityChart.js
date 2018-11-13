import React from 'react';
import { BarChart } from 'react-easy-chart';
import './chart.css'

export const EntityChart = (props) => {

  const poverty = props.info.Poverty;
  console.log(props)

    return (
      <BarChart
        axisLabels={{x: 'My x Axis', y: 'My y Axis'}}
        axes
        colorBars
        height={300}
        width={500}
        data={[
        {x: 'National Average', y: 12.9},
        {x: 'Community Average', y: poverty, color: 'orange'}
        ]}
        />

    )
};
