import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import animeReducer from './anime/anime';

const reducer = combineReducers({
  animeReducer,
});

const store = createStore(
  reducer,
  applyMiddleware(thunk),
);

export default store;
