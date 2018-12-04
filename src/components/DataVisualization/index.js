import React from 'react';
import {USmap} from './USmap';
import DistrictChart from "./DistrictChart"
import {PovertyRateChart} from "./PovertyRateChart"
import "./styles.css";


class DataVisualization extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
  }

  componentWillMount() {
      const poverty = require("../../json/poverty.json");
    this.setState({data:poverty})
    console.log(this.state)
  }

  render() {
    if (!this.state.data) {
      return null;
    }
      const data = this.state.data;
    return (
      <main role="main">
        <div className="margin-top">
         <center><h1 className="margin-bottom">The Poverty Data by State</h1></center>
         <USmap data={data} />

         <center><hr className="featurette-divider" width="90%"/></center>

         <div className="margin-center">
          <center><h1 className="margin-bottom">The Number of Poverty School Districts by State</h1></center>
          <DistrictChart data={data}/>
         </div>

         <center><hr className="featurette-divider" width="90%"/></center>

         <div className="margin-center">
          <center><h1 className="margin-bottom">The Poverty Rate by State</h1></center>
          <PovertyRateChart data={data}/>
         </div>
        </div>
      </main>
    )
  }
}
export default DataVisualization;
