import React, { Component } from 'react';
import './styles.css';

import MapHelper from './MapHelper';

class USMap extends Component {
  render() {
    return (
      <main role="main">

        <hr className="featurette-divider"/>

          <svg width="960" height="600">
            <MapHelper width={960} height={600}/>
          </svg>

      </main>

    );
  }
}

export default USMap;
