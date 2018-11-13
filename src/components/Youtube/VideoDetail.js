import React from 'react';

const VideoDetail = (props) => {
  if(!props.video) {
    return <div>Loading...</div>;
  }

  const videoID = props.video.id.videoId;
  const url = `https://www.youtube.com/embed/${videoID}`;

  return (
      <div className="embed-responsive embed-responsive-16by9">
        <iframe className="embed-responsive-item" src={url}></iframe>
      </div>
  );
};

export default VideoDetail;
