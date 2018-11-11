import React, {Component} from 'react';
import {Map, GoogleApiWrapper} from 'google-maps-react';
import Marker from '../Marker'

let GOOGLE_MAPS = require('../../json/GoogleMaps.json');
let GOOGLE_MAPS_KEYS = GOOGLE_MAPS.keys;


class Container extends Component {

  render() {
    const style = {
    width: '95%',
    height: '100%'
    }

    const pos = {lat:this.props.info.markerPosition.lat, lng: this.props.info.markerPosition.lng}

    return (
      <div>
        <Map google={this.props.google} style={style}>
          <Marker position={pos} />
        </Map>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: GOOGLE_MAPS_KEYS
})(Container)
