const RECEIVE_ANIME = 'RECIVE_ANIME';

const initialState = { anime: [] };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVE_ANIME: {
      const anime = action.payload;
      return { anime };
    }
    default:
      return state;
  }
};

export default reducer;
