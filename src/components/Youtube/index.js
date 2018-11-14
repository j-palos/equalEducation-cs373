import React, {Component} from 'react';
import {Row, Col} from 'reactstrap'
import YTSearch from 'youtube-api-search';
import VideoDetail from './VideoDetail';
import VideoList from './VideoList';

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
        <div>
          <Row>

              <Col>
              <div style={{marginTop: '120px'}}>
                <VideoDetail video={this.state.selectedVideo} />
                </div>

              </Col>
            <Col>
              <VideoList
                onVideoSelect={selectedVideo => this.setState({selectedVideo: selectedVideo})}
                videos={this.state.videos}
              />
            </Col>
          </Row>
        </div>
      )
    }
    else {
      return(
        "Loading..."
      )
    }}
}

export default Youtube;
