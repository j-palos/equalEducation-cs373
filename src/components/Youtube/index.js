import React, {Component} from 'react';
import YTSearch from 'youtube-api-search';
import VideoDetail from './VideoDetail';

let GOOGLE_MAPS = require('../../json/GoogleMaps.json');
const API_KEY = GOOGLE_MAPS.keys;

class Youtube extends Component {
  constructor(props) {
    super(props);
    const term = this.props.title
    this.state = {
      videos: [],
      selectedVideo: []
    };
    this.videoSearch(term);
  }

  videoSearch(term) {
      YTSearch({key: API_KEY, term: term}, videos => {
      this.setState({
        videos: videos,
        selectedVideo: videos[0]
      });
    });
  }

  render() {
    if (this.state.videos.length !== 0) {
      return (
        <VideoDetail video={this.state.selectedVideo} />
      )
    }
    else {
      return(
        "Loading..."
      )
    }}
}

export default Youtube;
