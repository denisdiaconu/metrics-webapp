/* eslint-disable */
import './style/Details.css';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

function Details() {
  const { id } = useParams();
  const { animeReducer } = useSelector((state) => state);
  const { anime } = animeReducer;
  const animeO = anime.find((anime) => anime.id == id);
  return (
    <div className="animeInfo">
      <div className="specialList">
        <div className="imageCont">
          <img src={animeO.image} alt="anime" />
        </div>
        <div className="titleCont">
          <h2>{animeO.title}</h2>
          <a href={animeO.url}>More Information here!</a>
        </div>
      </div>
      <div className="contLev">
        <p>More Info</p>
      </div>
      <div className="infoDown">
        <div className="lightSp">
          <p className="newP">Synopsis:</p>
          <p className="ptagSpecial">{animeO.synopsis}</p>
        </div>
        <div className="light">
          <p className="newP">Score:</p>
          <p className="ptagSpecial">{animeO.score}</p>
        </div>
        <div className="lightS">
          <p className="newP">Episodes:</p>
          <p className="ptagSpecial">{animeO.episodes}</p>
        </div>
      </div>
    </div>
  );
}

export default Details;
