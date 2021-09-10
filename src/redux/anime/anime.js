const RECEIVE_ANIME = 'RECEIVE_ANIME';
const RECEIVE_FILTER = 'RECEIVE_FILTER';

const initialState = { anime: [], filter: 'default' };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_ANIME: {
      const anime = action.payload;
      return { ...state, anime };
    }
    case RECEIVE_FILTER: {
      const filter = action.payload;
      const { anime } = state;
      switch (filter) {
        case 'Low Score':
          anime.sort((a, b) => parseFloat(a.score) - parseFloat(b.score));
          break;
        case 'High Score':
          anime.sort((a, b) => parseFloat(b.score) - parseFloat(a.score));
          break;
        case 'Fewest Episodes':
          anime.sort((a, b) => parseFloat(a.episodes) - parseFloat(b.episodes));
          break;
        case 'Most Episodes':
          anime.sort((a, b) => parseFloat(b.episodes) - parseFloat(a.episodes));
          break;
        default:
          break;
      }
      return { anime, filter };
    }
    default:
      return state;
  }
};

export default reducer;
