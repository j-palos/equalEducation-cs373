import React, {Component} from 'react';
import {Row, Container} from 'reactstrap';
import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';



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
  apiKey: ("AIzaSyCc81IYdNCv3kHTpYOKCnsXDFi6Tc0-EXg")
})(MapContainer)
