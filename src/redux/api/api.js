import api from '../../api/api';

const RECEIVE_ANIME = 'RECIVE_ANIME';

export const reciveAnime = (payload) => ({
  type: RECEIVE_ANIME,
  payload,
});

export const getAnime = () => (dispatch) => {
  api.getAnime().then((anime) => {
    dispatch(reciveAnime(anime));
    return anime;
  });
};
