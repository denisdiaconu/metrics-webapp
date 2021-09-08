import './style/Home.css';
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { receiveFilter } from '../redux/api/api';

function Home() {
  const { animeReducer } = useSelector((state) => state);
  const { anime } = animeReducer;
  const [animeDisplay, setAnimeDisplay] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    if (anime !== animeDisplay) {
      setAnimeDisplay(anime);
    }
  });

  if (animeDisplay) {
    return (
      <div className="animeContainer">
        <div className="animeDisplay">
          <div className="dropdown">
            <button type="button" className="dropbtn">Score Order</button>
            <div className="dropdown-content">
              <button type="button" onClick={(e) => dispatch(receiveFilter(e.target.textContent))}>High Score</button>
              <button type="button" onClick={(e) => dispatch(receiveFilter(e.target.textContent))}>Low Score</button>
            </div>
          </div>
          <div className="dropdown">
            <button type="button" className="dropbtn">Episode Order</button>
            <div className="dropdown-content">
              <button type="button" onClick={(e) => dispatch(receiveFilter(e.target.textContent))}>Most Episodes</button>
              <button type="button" onClick={(e) => dispatch(receiveFilter(e.target.textContent))}>Fewest Episodes</button>
            </div>
          </div>
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
