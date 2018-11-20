import React from 'react';
import ReactUSA from 'react-usa';

class USmap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
    };
    this.updateData = this.updateData.bind(this);
  }

  componentWillMount() {
    var csvFilePath = require("./poverty.csv");
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

   const states_data = this.state.data
   const palette = ["#584B53", "#9D5C63", "#D6E3F8", "#E4BB97", "#FEF5EF"]

   var data = []
   states_data.map(d => {
     const state = d.state
     const poverty = d.poverty
     var color

     if (poverty > 20) {
       color = palette[0]
     }
     else if (poverty > 17) {
       color = palette[1]
     }
     else if (poverty > 14) {
       color = palette[2]
     }
     else if (poverty > 11) {
       color = palette[3]
     }
     else {
       color = palette[4]
     }

     data.push({
       name: state,
       values: [{label: "Poverty", val: poverty}],
       color: color
     })
   })
   console.log("here", data)

   const mapboxAccessToken = "" 
   const mapboxType = "streets";
   const position = [37.0902, -95.7129];
   const zoom = 4;
   const stateStyle = { weight: 1, opacity: 1, color: '#666', dashArray: '3', fillOpacity: 0.7 };
   const stateHoverStyle = { weight: 5, color: '#FFF', dashArray: '1', fillOpacity: 0.7 };
   const excludeStates = ["District of Columbia", "Puerto Rico"];

   return (
     <div>
      <hr className="featurette-divider"/>
       <ReactUSA
         mapboxAccessToken={mapboxAccessToken}
         mapHeight="400px"
         mapWidth="100%"
         className="container"
         mapboxType={mapboxType}
         mapCenter={position}
         mapZoom={zoom}
         mapScrollZoom={false}
         neighborhoodOn={true}
         tooltip={true}
         tooltipSticky={false}
         data={data}
         stateStyle={stateStyle}
         stateHoverStyle={stateHoverStyle}
         excludeStates={excludeStates}
       />
       <center><h3>Data Source</h3></center>
       <center><a href="https://www.census.gov/data/tables/time-series/demo/income-poverty/historical-poverty-people.html" className="lead">
       The United States Census Bureau (2017) </a></center>

     </div>
   )
 }
}

export default USmap;
