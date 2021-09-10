import React from 'react';
import { useDispatch } from 'react-redux';
import './style/Header.css';
import { Link } from 'react-router-dom';
import Dropdown from 'react-bootstrap/Dropdown';
import { receiveFilter } from '../redux/api/api';

function Header() {
  const dispatch = useDispatch();

  return (
    <header>
      <nav>
        <Link className="link" to="/"><button className="specialButton" type="button"><i aria-label="Mute volume" role="button" className="fas fa-chevron-circle-left" /></button></Link>
        <Dropdown className="dropCont">
          <Dropdown.Toggle className="toggleIt" variant="success" id="dropdown-basic">
            <i aria-label="Mute volume" role="button" className="fas fa-sort" />
          </Dropdown.Toggle>
          <Dropdown.Menu className="menuAll">
            <Dropdown.Item href="#" onClick={(e) => dispatch(receiveFilter(e.target.textContent))}>High Score</Dropdown.Item>
            <Dropdown.Item href="#" onClick={(e) => dispatch(receiveFilter(e.target.textContent))}>Low Score</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="dropCont">
          <Dropdown.Toggle className="toggleIt" variant="success" id="dropdown-basic">
            <i aria-label="Mute volume" role="button" className="fas fa-desktop" />
          </Dropdown.Toggle>
          <Dropdown.Menu className="menuAll">
            <Dropdown.Item href="#" onClick={(e) => dispatch(receiveFilter(e.target.textContent))}>Most Episodes</Dropdown.Item>
            <Dropdown.Item href="#" onClick={(e) => dispatch(receiveFilter(e.target.textContent))}>Fewest Episodes</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </nav>
    </header>
  );
}

export default Header;
