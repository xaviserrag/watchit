import movies from './movies';
import genres from './genres';

import { combineReducers } from 'redux';
const rootReducer = combineReducers({
  movies,
  genres
});

export default rootReducer;