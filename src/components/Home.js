import './style/Home.css';
import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

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
            <Link key={element.id} to={`/details/${element.id}`}>
              <div className="animeCard">
                <h3>{element.title}</h3>
                <img src={element.image} alt="anime" />
              </div>
            </Link>
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
