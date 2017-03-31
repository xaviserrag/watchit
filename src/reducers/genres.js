import {
  REQUEST_GENRES, RECEIVE_GENRES, SELECT_GENRE
} from '../actions/genres';

let defaultState = {
  genresList: {},
  selectedGenres: []
}


export default (state = defaultState, action) => {
  switch (action.type) {
    case SELECT_GENRE:
      let currentGenres = state.selectedGenres.slice();
      let selected = false;
      for (let i = 0; i < currentGenres.length; i++) {
        if (currentGenres[i] === action.genre) {
          currentGenres.splice(i, 1);
          selected = true;
          break;
        }
      }

      if (!selected) {
        currentGenres.push(action.genre)
      }

      return Object.assign({}, state, {
        selectedGenres: currentGenres,
      });
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