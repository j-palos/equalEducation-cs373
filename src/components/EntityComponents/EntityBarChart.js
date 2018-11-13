import React from 'react';
import { BarChart } from 'react-easy-chart';
import './chart.css'

export const EntityBarChart = (props) => {

  var poverty = props.info.Poverty;
  poverty = poverty.replace(/\d+% ?/g, "");

  return (
    <div style={{display: 'inline-block'}}>
      <h4 className="display-7 text-center">The Community Poverty Rate</h4>
      <BarChart
        axisLabels={{x: 'My x Axis', y: 'My y Axis'}}
        axes
        grid
        colorBars
        height={330}
        width={500}
        data={[
        {x: 'National Average', y: 12.3, color: "#dce7c5"},
        {x: 'Community Average', y: poverty, color: 'orange'}
        ]}
        yDomainRange={[0, 80]}
        margin={{top: 0, right: 0, bottom: 30, left: 30}}
        />
    </div>
    )
};
