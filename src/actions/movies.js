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
    movie
  }
};

function getImage(url){
  return new Promise(function(resolve, reject){
    var img = new Image()
    img.onload = function(){
      resolve(url);
    };
    img.onerror = function(){
      reject(url);
    };
    img.src = url;
  });
};

function fetchMovie(genres) {
  return function (dispatch) {
    let page = getRandomInt(0, TOTAL_PAGES);
    let apiKey = '23564cb33be66abe06ab37d2417ce3b3';
    let url = `https://api.themoviedb.org/3/discover/` + 
    `movie?api_key=${apiKey}&language=en-US& ` + 
    `sort_by=popularity.desc&include_adult=false&include_video=false&page=${page}`

    dispatch(requestMovie());

    return fetch(url)
      .then(response => response.json())
      .then(data => {
          let randInt = getRandomInt(0, ITEMS_PAGE - 1);
          let movie = data.results[randInt];
          let movieUrl = `https://api.themoviedb.org/3/movie/${movie.id}?api_key=${apiKey}&language=en-US`;

          // Once get the id of the movie, ask for all the information
          // of the movie to the server.
          // Also imbd id is provided, so maybe more information can be obtained
          fetch(movieUrl)
            .then(response => response.json())
            .then(movieData => {

              //Once getting the info, wait to load the img.
              let imgUrl = 'https://image.tmdb.org/t/p/w500/' + (movieData.poster_path ? movieData.poster_path : movieData.backdrop_path);

              getImage(imgUrl)
                .then(() => {
                  return dispatch(receiveMovie(movieData));
                });
            });

          // Transform genre ids to genre names
          // not necessary anymore because new info has it already
          // movie.genres = [];
          // movie.genre_ids.forEach((id) => {
          //   movie.genres.push(genres[id]);
          // });

      });
  };
};

function shouldFetchMovie(state) {
  return !state.movies.isFetching;
};

export function fetchMovieIfAvailable() {
  return (dispatch, getState) => {
    let state = getState();
    if (shouldFetchMovie(state)) {
      return dispatch(fetchMovie(state.genres))
    } else {
      return Promise.resolve();
    }
  }
};

//// TODO: REQUEST IF FETCH DOESN'T WORK. ADD LATER ////
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
