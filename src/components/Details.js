/* eslint-disable */
import './style/Details.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

function Details() {
  const { id } = useParams();
  const { animeReducer } = useSelector((state) => state);
  const { anime } = animeReducer;
  const animeO = anime.find((anime) => anime.id == id);
  console.log(animeO);
  return (
    <div className="animeInfo">
      <Link to="/">Go Back</Link>
      <div>
          <img src={animeO.image} alt="anime" />
          <h2>{animeO.title}</h2>
      </div>
      <ul>
          <li>{animeO.synopsis}</li>
          <li>
              <div>
                  <p>Score: {animeO.score}</p>
                  <p>Episodes: {animeO.episodes}</p>
              </div>
          </li>
      </ul>
    </div>
  );
}

export default Details;
