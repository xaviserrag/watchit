import fetch from 'isomorphic-fetch';

const getRandomInt = (min, max) => Math.floor(Math.random() * (max - min) + min);

const TOTAL_PAGES = 1000;
const ITEMS_PAGE = 20;

export const REQUEST_MOVIE = 'REQUEST_MOVIE';
export const RECEIVE_MOVIE = 'RECEIVE_MOVIE';

export function requestMovie() {
  return {
    type: REQUEST_MOVIE,
  }
};

export function receiveMovie(movie) {
  return {
    type: RECEIVE_MOVIE,
    movie: movie
  }
};

function fetchMovie() {
  return function (dispatch) {
    let page = getRandomInt(0, TOTAL_PAGES);
    let url = `https://api.themoviedb.org/3/discover/` + 
    `movie?api_key=23564cb33be66abe06ab37d2417ce3b3&language=en-US& ` + 
    `sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`

    dispatch(requestMovie());

    return fetch(url)
      .then(response => response.json())
      .then(data => {
          let randomItem = getRandomInt(0, ITEMS_PAGE - 1);
          return dispatch(receiveMovie(data.results[randomItem]));
      });
  };
};

function shouldFetchMovie(state) {
  return !state.isFetching;
};

export function fetchMovieIfAvailable() {
  return (dispatch, getState) => {
    if (shouldFetchMovie(getState())) {
      return dispatch(fetchMovie())
    } else {
      return Promise.resolve();
    }
  }
};

//// REQUEST IF FETCH DOESN'T WORK ////
// const requestCall = () => {
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
