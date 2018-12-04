import React from 'react';
import {BarChart} from 'react-easy-chart';

export default class DistrictChart extends React.PureComponent {
    render() {
        let data = [];
        this.props.data.map(d => {
            const state = d.state;
            const num_districts = d.num_districts;
            const palette = ["#E37476", "#F19F50", "#6E90B5", "#8DC1BD"];

            let color = palette[3];
    if (num_districts > 1) {
      if(num_districts > 14) {
        color = palette[0]
      }
      else if(num_districts > 6) {
        color = palette[1]
      }
      else {
        color = palette[2]
      }
      data.push({
        x: state,
        y: num_districts,
        color: color
      })
    }
        });
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
};
