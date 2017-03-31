import { connect } from 'react-redux';

import GenreList from '../components/GenreList';
import { selectGenre } from '../actions/genres.js';

const mapStateToProps = (state) => state.genres || {};

const mapDispatchToProps = (dispatch) => {
  return {
    onSelectGenre: (genre) => {
      dispatch(selectGenre(genre))} 
  }
}

const GenreContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(GenreList);

export default GenreContainer;