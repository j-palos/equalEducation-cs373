import React, { Component } from 'react';
import * as topojson from 'topojson';
import * as d3 from 'd3';

class MapHelper extends Component {
    state = {
        usData: null,
    }

    componentDidMount() {
      var files = ["https://d3js.org/us-10m.v1.json"];
      var promises = [];

      files.forEach(function(url) {
        promises.push(d3.json(url))
      });

      Promise.all(promises)
        .then(result => {
          const [ usData ] = result;
          this.setState({ usData:usData });
      });
    }

    componentDidUpdate() {
        var svg = d3.select("svg");
        var path = d3.geoPath();
        const us = this.state.usData;
        svg.append("g")
          .attr("class", "states")
        .selectAll("path")
        .data(topojson.feature(us, us.objects.states).features)
        .enter().append("path")
          .attr("d", path);

        svg.append("path")
          .attr("class", "state-borders")
          .attr("d", path(topojson.mesh(us, us.objects.states, function(a, b) { return a !== b; })));
    }

    render() {
      const { usData } = this.state;
      if (!usData ) {
        return null;
      }
      return <g ref="anchor" />;
    }
}

export default MapHelper;
