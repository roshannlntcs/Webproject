import { useEffect, useState } from "react";
import logo from "./assets/audoralogo.png";
import "./App.css";

function App() {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    fetch("https://itunes.apple.com/search?term=drake&entity=song&limit=5")
      .then((res) => res.json())
      .then((data) => setSongs(data.results));
  }, []);

  return (
    <div className="app">
      {/* Logo + Title */}
      <div className="header">
        <img src={logo} alt="Audora Logo" className="logo" />
        <h1 className="title"> Audora</h1>
      </div>

      {/* Songs */}
      {songs.map((song) => (
        <div key={song.trackId} className="song">
          <img src={song.artworkUrl100} alt={song.trackName} />
          <p>
            <strong>{song.trackName}</strong> - {song.artistName}
          </p>
          <audio controls>
            <source src={song.previewUrl} type="audio/mp4" />
          </audio>
        </div>
      ))}
    </div>
  );
}

export default App;
