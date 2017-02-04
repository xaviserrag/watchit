import { connect } from 'react-redux';

import Movie from '../components/Movie';
// import { fetchMovieIfAvailable } from '../actions/movies.js';

const mapStateToProps = (state) => state.movies.movie || {};
// const mapDispatchToProps = (dispatch) => {
//   return {
//     onGetMovieClick: () => {
//       dispatch(fetchMovieIfAvailable())} 
//   }
// }

const MovieContainer = connect(
  mapStateToProps,
  // mapDispatchToProps
)(Movie);

export default MovieContainer;