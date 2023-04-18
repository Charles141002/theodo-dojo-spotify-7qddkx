import logo from './assets/logo.svg';
import './App.css';
import { useState } from 'react';
import { fetchTracks } from './lib/fetchTracks';
import { useQuery } from '@tanstack/react-query';

const App = () => {
  const { data: tracks, isLoading } = useQuery({
    queryKey: ['tracks'],
    queryFn: fetchTracks,
  });

  console.log(tracks?.[0]?.track.preview_url);
  console.log(tracks?.[0]?.track.name);
  console.log(typeof tracks);

  const [trackIndex, setTrackIndex] = useState(0);

  const goToNextTrack = () => {
    setTrackIndex(trackIndex + 1);
  };

  const AlbumCover = () => {
    const src = 'https://example.com/image.png'; // A changer ;)
    return <img src={src} style={{ width: 400, height: 400 }} />;
  };

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Bienvenue sur mon blind test</h1>
      </header>
      <div className="App-images">
        <div>{isLoading ? <p>Loading</p> : <p></p>}</div>
        <div>
          {tracks?.[trackIndex]?.track.name}
          <audio
            src={tracks?.[trackIndex]?.track.preview_url}
            autoPlay
            controls
          />
          <button onClick={goToNextTrack}>Next track</button>
        </div>
      </div>
      <div className="App-buttons"></div>
    </div>
  );
};

export default App;
