import React from 'react';
import {PieChart} from 'react-easy-chart';
import './chart.css'

export const EntityPieChart = (props) => {

    let poverty = props.info.Poverty;
  poverty = poverty.replace(/\d+% ?/g, "");

  return (
    <div style={{display: 'inline-block'}}>
      <h4 className="display-7 text-center"> The Rate of Students in Poverty</h4>
      <PieChart
        labels
        size={300}
        data={[
          {key: 'Poverty', value: poverty, color: 'orange'},
          {key: 'Others', value: 100-poverty, color: '#dce7c5'},
        ]}
        styles={{
        '.chart_text': {
          fontSize: '3em',
          fill: '#fff'
        }}}
        />
    </div>
    )
};
