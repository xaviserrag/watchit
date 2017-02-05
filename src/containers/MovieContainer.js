import { connect } from 'react-redux';

import Movie from '../components/Movie';

const mapStateToProps = (state) => state.movies || {};

const MovieContainer = connect(
  mapStateToProps,
)(Movie);

export default MovieContainer;