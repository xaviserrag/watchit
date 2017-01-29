import React, { Component } from 'react';

class Movie extends Component {
  render() {
    let props = this.props;
    console.error(this.props)
    return (
      <div>
        <h1>{props ? props.title : ''}</h1>
        <button onClick={props.onGetMovieClick} ></button>
      </div>
    )
  }
}

export default Movie;