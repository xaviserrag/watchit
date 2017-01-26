// import { createStore } from 'react-redux';

const defaultState = {
  movies: [],
  movieIndex: 0
};

const getMovie = () => {
  let xhr = new XMLHttpRequest();
  xhr.open("GET", 'http://image.tmdb.org/t/p/discover', true);
  xhr.setRequestHeader('Accept', 'application/json');
  xhr.responseType = "text";
  xhr.onreadystatechange = function () {
    if (this.readyState === 4) {
      if (this.status === 200){
        if (typeof success === "function") {
          console.log(JSON.parse(this.response));	
        }else{
          console.error('No success callback, but the request gave results')
        }
      }else{
        console.error('No error callback')
      }
    }
  };
  xhr.send();

};

// const movies = (state = defaultState, action) => {
//   let movie = {
//     title: 'newMovie'
//   };

//   getMovie();

//   switch (action.type) {
//     case 'GET_MOVIE':
//       return {
//         ...state,
//         movies: [...state.movies, movie]
//       };
//     default:
//       return state;
//   }
// };

export default getMovie;