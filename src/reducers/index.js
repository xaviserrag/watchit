import { combineReducers } from 'redux';
import {
  REQUEST_MOVIE, RECEIVE_MOVIE
} from '../actions/index'

// const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

// const defaultState = {
//   movies: [],
//   movieIndex: 0
// };

// const totalPages = 1000;
// const itemsPerPage = 20;

// const getMovie = () => {
//   let xhr = new XMLHttpRequest();
//   let page = getRandomInt(0, totalPages);
//   let url = `https://api.themoviedb.org/3/discover/` + 
//   `movie?api_key=23564cb33be66abe06ab37d2417ce3b3&language=en-US& ` + 
//   `sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`
//   xhr.open("GET", url, true);
//   xhr.setRequestHeader('Accept', 'application/json');
//   xhr.responseType = "text";
//   xhr.onreadystatechange = function () {
//     if (this.readyState === 4) {
//       if (this.status === 200){
//           let data = JSON.parse(this.response);
//           let randomItem = getRandomInt(0, itemsPerPage - 1);
//           console.log(data, randomItem, data.results[randomItem])
//       }else{
//         console.error('No error callback')
//       }
//     }
//   };
//   xhr.send();

// };


const defaultState = {
  movies: [],
  isFething: false,
  movieIndex: 0
};

const movies = (state = defaultState, action) => {
  switch (action.type) {
    case REQUEST_MOVIE:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_MOVIE:
      return Object.assign({}, state, {
        isFetching: false,
        movies: [
          ...state.movies,
          action.movie
        ]
      });
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  movies
});

export default rootReducer;