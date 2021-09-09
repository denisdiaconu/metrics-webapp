/* eslint-disable */ 
import React from 'react';
import { useDispatch } from 'react-redux';
import './style/Header.css';
import { Link } from 'react-router-dom';
import { receiveFilter } from '../redux/api/api';
import Button from 'react-bootstrap/Button';

function Header() {
  const dispatch = useDispatch();

  return (
    <header>
      <nav>
        <Link className="link" to="/"><button className="specialButton" type="button"><i aria-label="Mute volume" role="button" className="fas fa-chevron-circle-left" /></button></Link>
        <div className="dropAndroid">
          <div className="dropdown">
            <button type="button" className="dropbtn"><i aria-label="Mute volume" role="button" className="fas fa-sort" /></button>
            <div className="dropdown-content">
              <button type="button" onClick={(e) => dispatch(receiveFilter(e.target.textContent))}>High Score</button>
              <button type="button" onClick={(e) => dispatch(receiveFilter(e.target.textContent))}>Low Score</button>
            </div>
          </div>
          <div className="dropdown">
            <button type="button" className="dropbtn"><i aria-label="Mute volume" role="button" className="fas fa-desktop" /></button>
            <div className="dropdown-content">
              <button type="button" onClick={(e) => dispatch(receiveFilter(e.target.textContent))}>Most Episodes</button>
              <button type="button" onClick={(e) => dispatch(receiveFilter(e.target.textContent))}>Fewest Episodes</button>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
