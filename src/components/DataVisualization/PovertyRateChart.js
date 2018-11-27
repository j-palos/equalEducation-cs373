import React from 'react';
import { BarChart } from 'react-easy-chart';

export const PovertyRateChart = (props) => {
  let props_data = props.data;

  var data = []
  props_data.map(d => {
    const state = d.state
    const poverty = d.poverty
    const num_districts = d.num_districts
    var color = "#FEF5EF"
    if (poverty > 12) {
      if(poverty > 16) {
         color = "#584B53"
       }
       else if(poverty > 14) {
         color = "#9D5C63"
       }
       else {
         color = "#E4BB97"
       }
      data.push({
        x: state,
        y: poverty,
        color: color
      })
    }
  })
  return(
    <BarChart
      axisLabels={{x: 'My x Axis', y: 'My y Axis'}}
      axes
      grid
      colorBars
      height={500}
      width={1300}
      data={data}
      yDomainRange={[10, 25]}
      margin={{top: 0, right: 0, bottom: 30, left: 30}}
      />
  )
}
