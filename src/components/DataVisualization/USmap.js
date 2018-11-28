import React from 'react';
import ReactUSA from 'react-usa';

let GOOGLE_MAPS = require('../../json/GoogleMaps.json');
let MAP_BOX_KEYS = GOOGLE_MAPS.mapbox_keys;

export const USmap = (props) => {
  const props_data = props.data;
  const palette = ["#E37476", "#F19F50", "#6E90B5", "#8DC1BD"]

  var data = []
  props_data.map(d => {
    const state = d.state
    const poverty = d.poverty
    const num_districts = d.num_districts
    var color

    if (poverty > 16) {
      color = palette[0]
    }
    else if (poverty > 14) {
      color = palette[1]
    }
    else if (poverty > 12) {
      color = palette[2]
    }
    else {
      color = palette[3]
    }

    data.push({
      name: state,
      values: [{label: "Poverty Rate", val: poverty + "%"}, {label: "Number of Poverty Districts", val: num_districts}],
      color: color
    })
  })
  const mapboxAccessToken = MAP_BOX_KEYS
  const mapboxType = "streets";
  const position = [37.0902, -95.7129];
  const zoom = 4;
  const stateStyle = { weight: 1, opacity: 1, color: '#666', dashArray: '3', fillOpacity: 0.7 };
  const stateHoverStyle = { weight: 5, color: '#FFF', dashArray: '1', fillOpacity: 0.7 };
  const excludeStates = ["District of Columbia", "Puerto Rico"];
  return(
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
  )
}
