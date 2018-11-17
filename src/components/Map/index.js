import React, {Component} from 'react';
import Container from "./Container";
import PropTypes from 'prop-types';


class Map extends Component {
  static propTypes = {
    google: PropTypes.object,
    zoom: PropTypes.number,
    initialCenter: PropTypes.object,
    markerPosition: PropTypes.object,
  };

  static defaultProps = {
    zoom: 13,
    initialCenter: {
      lat: 37.774929,
      lng: -122.419416
    },
    markerPosition: {
      lat: 37.774929,
      lng: -122.419416
    },
  }

  constructor(props) {
    super(props);
    var location = props.location
    var partsOfStr = location.split(',');
    const m_lat = partsOfStr[0], m_lng = partsOfStr[1];

    this.state = {
      currentLocation: {
        lat: m_lat,
        lng: m_lng
      },
      markerPosition: {
        lat: m_lat,
        lng: m_lng
      }
    }
  }

  render() {
    const info = this.state
    return (
      <div ref='map'>
        <Container info={info}/>
      </div>
    )
  }
}

export default Map;
