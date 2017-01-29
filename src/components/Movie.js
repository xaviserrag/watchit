import React, { Component } from 'react';
import '../css/Movie.css';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500/';

class Movie extends Component {
  render() {
    let props = this.props;
    console.log(this.props)
    let imgUrl = props.poster_path ? props.poster_path : props.backdrop_path;

    return (
      <section className="Movie">
        <article>
          <h1>{props ? props.title : ''}</h1>
          <img className={props.title ? 'poster' : ''} src={IMG_BASE_URL + imgUrl} alt="" />
          <p>{props.overview}</p>

          <button onClick={props.onGetMovieClick} > Get a random movie!</button>
        </article>
      </section>
    )
  }
};

export default Movie;