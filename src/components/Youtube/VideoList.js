import React from 'react';
import VideoListItem from './VideoListItem';
import {Col, Row} from 'reactstrap';

const VideoList = (props) => {
    const videoItem = props.videos.map((video) => {
        return <VideoListItem
            onVideoSelect={props.onVideoSelect}
            key={video.etag}
            video={video}
        />;
    });

    return (
        <Row>
            <Col>
                {videoItem}
            </Col>
        </Row>
    );
};

export default VideoList;
