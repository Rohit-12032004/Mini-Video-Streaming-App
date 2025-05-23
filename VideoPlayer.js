import React from 'react';

function VideoPlayer({ video }) {
  if (!video) return <div>Loading...</div>;

  return (
    <div>
      <h2>{video.title}</h2>
      <video width="100%" height="400" controls>
        <source src={video.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <p>{video.description}</p>
    </div>
  );
}

export default VideoPlayer;
