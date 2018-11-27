import React, {Component} from 'react';
import {GoogleApiWrapper, Map} from 'google-maps-react';
import Marker from '../Marker'

let GOOGLE_MAPS = require('../../json/GoogleMaps.json');
let GOOGLE_MAPS_KEYS = GOOGLE_MAPS.keys;


class Container extends Component {

    render() {
        const style = {
            width: '95%',
            height: '100%'
        }
        const pos = {lat: this.props.info.markerPosition.lat, lng: this.props.info.markerPosition.lng}
        const pos_lat = pos.lat
        const pos_lng = pos.lng

        return (
            <div>
                <Map google={this.props.google}
                     style={style}
                     initialCenter={{
                         lat: pos_lat,
                         lng: pos_lng
                     }}
                >
                    <Marker position={pos}/>
                </Map>
            </div>
        );
    }
}

export default GoogleApiWrapper({
    apiKey: GOOGLE_MAPS_KEYS
})(Container)
