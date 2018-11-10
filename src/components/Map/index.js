import React, {Component} from 'react';
import ReactDOM from 'react-dom';
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
    const {lat, lng} = this.props.initialCenter;
    // this.props.location;
    const m_lat = 37.775929, m_lng = -122.419416;
    this.state = {
      currentLocation: {
        lat: lat,
        lng: lng
      },
      markerPosition: {
        lat: m_lat,
        lng: m_lng
      }
    }
  }

  render() {
    const info = this.state
    console.log("info:", info)
    return (
      <div ref='map'>
        <Container info={info}/>
      </div>
    )
  }
}

export default Map;
