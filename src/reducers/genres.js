import {
  REQUEST_GENRES, RECEIVE_GENRES
} from '../actions/genres';

export default (genres = {}, action) => {
  switch (action.type) {
    case RECEIVE_GENRES:
      return action.genres;
    case REQUEST_GENRES:
    default:
      return genres;
  }
};