import {
  REQUEST_MOVIE, RECEIVE_MOVIE
} from '../actions/index';

const defaultState = {
  movie: {},
  isFething: false
};

export default (state = defaultState, action) => {
  switch (action.type) {
    case REQUEST_MOVIE:
      return Object.assign({}, state, {
        isFetching: true
      });
    case RECEIVE_MOVIE:
      return Object.assign({}, state, {
        isFetching: false,
        movie: action.movie
      });
    default:
      return state;
  }
};