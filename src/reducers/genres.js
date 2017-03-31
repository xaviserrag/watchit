import {
  REQUEST_GENRES, RECEIVE_GENRES, ADD_GENRE, REMOVE_GENRE
} from '../actions/genres';

export default (state = {}, action) => {
  switch (action.type) {
    case RECEIVE_GENRES:
      return Object.assign({}, state, {
        genreList: action.genres
      });
      return action.genres;
    case REQUEST_GENRES:
    default:
      return state;
  }
};