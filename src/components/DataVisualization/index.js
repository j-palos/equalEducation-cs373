import React from 'react';
import { USmap } from './USmap';
import { DistrictChart } from "./DistrictChart"
import { PovertyRateChart } from "./PovertyRateChart"
import "./styles.css";

class DataVisualization extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
    this.updateData = this.updateData.bind(this);
  }

  componentWillMount() {
    var csvFilePath = require("../../json/poverty.csv");
    var Papa = require("papaparse/papaparse.min.js");
    Papa.parse(csvFilePath, {
      header: true,
      download: true,
      skipEmptyLines: true,
      complete: this.updateData
    });
  }

  updateData(result) {
    const data = result.data;
    this.setState({ data });
  }


  render() {
    if (!this.state.data) {
      return null;
    }
    const data = this.state.data
    return (
      <main role="main">
        <div className="margin-top">
         <center><h1 className="margin-bottom">The Poverty Data by State</h1></center>
         <USmap data={data} />

         <center><hr className="featurette-divider" width="90%"/></center>

         <div className="margin-left">
          <center><h1 className="margin-bottom">The Number of Poverty School Districts by State</h1></center>
          <DistrictChart data={data}/>
         </div>

         <center><hr className="featurette-divider" width="90%"/></center>

         <div className="margin-left">
          <center><h1 className="margin-bottom">The Poverty Rate by State</h1></center>
          <PovertyRateChart data={data}/>
         </div>
        </div>
      </main>
    )
  }
}
export default DataVisualization;
