import React, {Component} from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';
import Marker from '../Marker'

let GOOGLE_MAPS = require('../../json/GoogleMaps.json');
let GOOGLE_MAPS_KEYS = GOOGLE_MAPS.keys;


class Container extends Component {

  render() {
    const style = {
    width: '80%',
    height: '100%'
    }
    const pos = {lat: 37.774929, lng: -122.419416}
    return (
      <div style={style}>
        <Map google={this.props.google}>
          <Marker position={pos} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: GOOGLE_MAPS_KEYS
})(Container)
