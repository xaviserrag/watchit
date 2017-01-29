import { connect } from 'react-redux';

import Movie from '../components/Movie';
import { fetchMovieIfAvailable } from '../actions/index.js';

const mapStateToProps = (state) => state.movie || {};
const mapDispatchToProps = (dispatch) => {
  return {
    onGetMovieClick: () => {
      dispatch(fetchMovieIfAvailable())} 
  }
}

const MovieContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Movie);

export default MovieContainer;