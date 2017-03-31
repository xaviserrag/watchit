import { connect } from 'react-redux';

import GenreList from '../components/GenreList';
import { addGenre } from '../actions/genres.js';

const mapStateToProps = (state) => state.genres || {};

const mapDispatchToProps = (dispatch) => {
  return {
    onGenreClick: () => {
      dispatch(addGenre())} 
  }
}

const GenreContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GenreList);

export default GenreContainer;