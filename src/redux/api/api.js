import api from '../../api/api';

const RECEIVE_ANIME = 'RECEIVE_ANIME';
const RECEIVE_FILTER = 'RECEIVE_FILTER';

export const reciveAnime = (payload) => ({
  type: RECEIVE_ANIME,
  payload,
});

export const receiveFilter = (payload) => ({
  type: RECEIVE_FILTER,
  payload,
});

export const getAnime = () => (dispatch) => {
  api.getAnime().then((anime) => {
    dispatch(reciveAnime(anime));
    return anime;
  });
};
