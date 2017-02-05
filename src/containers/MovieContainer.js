import { connect } from 'react-redux';

import Movie from '../components/Movie';

const mapStateToProps = (state) => state.movies.movie || {};

const MovieContainer = connect(
  mapStateToProps,
)(Movie);

export default MovieContainer;