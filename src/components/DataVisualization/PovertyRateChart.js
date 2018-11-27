import React from 'react';
import { BarChart } from 'react-easy-chart';

export const PovertyRateChart = (props) => {
  let props_data = props.data;

  var data = []
  props_data.map(d => {
    const state = d.state
    const poverty = d.poverty
    const palette = ["#E37476", "#F19F50", "#6E90B5", "#8DC1BD"]

    var color = palette[3]
    if (poverty > 12) {
      if(poverty > 16) {
         color = palette[0]
       }
       else if(poverty > 14) {
         color = palette[1]
       }
       else {
         color = palette[2]
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
