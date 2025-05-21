import React from 'react';

function VideoList({ videos, onVideoSelect }) {
  return (
    <div style={{ marginTop: 20 }}>
      <h3>Video List</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {videos.map(video => (
          <li
            key={video._id}
            onClick={() => onVideoSelect(video)}
            style={{
              cursor: 'pointer',
              marginBottom: 10,
              padding: 10,
              border: '1px solid #ddd',
              borderRadius: 4,
            }}
          >
            <strong>{video.title}</strong><br />
            <small>{video.description}</small>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default VideoList;
