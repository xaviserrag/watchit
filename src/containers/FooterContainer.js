import { connect } from 'react-redux';

import Footer from '../components/Footer';
import { fetchMovieIfAvailable } from '../actions/movies.js';

const mapDispatchToProps = (dispatch) => {
  return {
    onGetMovieClick: () => {
      dispatch(fetchMovieIfAvailable())} 
  }
}

const FooterContainer = connect(
  null,
  mapDispatchToProps
)(Footer);

export default FooterContainer;