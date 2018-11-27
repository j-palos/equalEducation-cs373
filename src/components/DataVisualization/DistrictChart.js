import React from 'react';
import { BarChart } from 'react-easy-chart';

export const DistrictChart = (props) => {
  let props_data = props.data;

  var data = []
  props_data.map(d => {
    const state = d.state
    const num_districts = d.num_districts
    var color = "#FEF5EF"
    if (num_districts > 1) {
      if(num_districts > 14) {
        color = "#584B53"
      }
      else if(num_districts > 6) {
        color = "#9D5C63"
      }
      else {
        color = "#E4BB97"
      }
      data.push({
        x: state,
        y: num_districts,
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
      yDomainRange={[0, 30]}
      margin={{top: 0, right: 0, bottom: 30, left: 30}}
      />
  )
}
