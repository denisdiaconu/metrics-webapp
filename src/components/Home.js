import './style/Home.css';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

function Home() {
  const { animeReducer } = useSelector((state) => state);
  const { anime } = animeReducer;
  const [animeDisplay, setAnimeDisplay] = useState(null);

  useEffect(() => {
    if (anime !== animeDisplay) {
      setAnimeDisplay(anime);
    }
  });

  if (animeDisplay) {
    return (
      <div className="animeContainer">
        <div className="animeDisplay">
          {animeDisplay.map((element) => (
            <div key={element.id}>
              <h3>{element.title}</h3>
            </div>
          ))}
        </div>
      </div>
    );
  }
  return (
    <h1>Loading...</h1>
  );
}

export default Home;
