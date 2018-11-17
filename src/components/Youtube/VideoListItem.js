import React, { Component } from 'react';
import {Col} from 'reactstrap'

const VideoListItem = (props) => {
  const imageUrl = props.video.snippet.thumbnails.default.url;

  console.log(props.onVideoSelect);
  return (
    <Col onClick={() => props.onVideoSelect(props.video)} className="list-group-item">

      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imageUrl}/>

        </div>
        <div className="media-body">
          <div className="display-8 align-middle media-heading"
                style={{marginTop: '10px',
                        marginLeft: '10px',
                        fontWeight: 'bold'
                      }}>
            {props.video.snippet.title}
          </div>
        </div>
      </div>
    </Col>
  );
};

export default VideoListItem;
