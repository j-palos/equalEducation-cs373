// import React, {Component} from 'react';
//
// export class MapContainer extends Component {
//   render() {
//     return (
//       <div ref='map'>
//         Loading map...
//       </div>
//     )
//   }
// }


import React, {Component} from 'react';
import {Map, Marker, GoogleApiWrapper} from 'google-maps-react';

let GOOGLE_MAPS = require('../../json/GoogleMaps.json');
let GOOGLE_MAPS_KEYS = GOOGLE_MAPS.keys;

export class MapContainer extends Component {
  render() {
    const style = {
    width: '95%',
    height: '100%'
    }
    return (
        <Map
        google={this.props.google}
        initialCenter={{
          lat: 40.854885,
          lng: -88.081807
        }}
        style={style}
        zoom={14}>

        <Marker onClick={this.onMarkerClick} name={'Current location'} />
        </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: GOOGLE_MAPS_KEYS
})(MapContainer)
