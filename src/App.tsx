import logo from './assets/logo.svg';
import './App.css';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 className="App-title">Bienvenue sur mon blind test</h1>
      </header>
      <div className="App-images">
      <audio src={trackUrls[trackIndex]} autoPlay controls />
<button onClick={goToNextTrack}>
    Next track
</button>
      </div>
      <div className="App-buttons"></div>
    </div>
  );
};

export default App;
