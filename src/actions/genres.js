import fetch from 'isomorphic-fetch';

export const REQUEST_GENRES = 'REQUEST_GENRES';
export const RECEIVE_GENRES = 'RECEIVE_GENRES';
export const SELECT_GENRE = 'SELECT_GENRE';

export function requestGenres() {
  return {
    type: REQUEST_GENRES,
  }
};

export function receiveGenres(genres) {
  return {
    type: RECEIVE_GENRES,
    genres
  }
};

export function fetchGenres() {
  return function (dispatch) {

    let url = 'https://api.themoviedb.org/3/genre/movie/list?api_key=23564cb33be66abe06ab37d2417ce3b3&language=en-US'

    dispatch(requestGenres());

    return fetch(url)
      .then(response => response.json())
      .then(data => {
        //Create a genres map to optimize later use.
        let genres = {};
        data.genres.forEach((g) => genres[g.id] = g.name);
        return dispatch(receiveGenres(genres));
      });
  };
};

export function selectGenre(genre) {
  return {
    type: SELECT_GENRE,
    genre,
  }
}
