import React, { Component } from 'react';

class MovieSynopsis extends Component {
  render() {
    return (
      <p>{this.props.movie.overview}</p>
    )
  }
};

export default MovieSynopsis;