import React, { useState, useEffect } from 'react';
import axios from 'axios';
import VideoList from './components/VideoList';
import VideoPlayer from './components/VideoPlayer';

function App() {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    axios.get('http://localhost:5000/api/videos')
      .then(response => {
        setVideos(response.data);
        if (response.data.length > 0) setSelectedVideo(response.data[0]);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div style={{ maxWidth: 900, margin: 'auto', padding: 20 }}>
      <h1>Mini Video Streaming App</h1>
      <VideoPlayer video={selectedVideo} />
      <VideoList videos={videos} onVideoSelect={setSelectedVideo} />
    </div>
  );
}

export default App;
