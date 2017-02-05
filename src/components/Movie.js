import React, { Component } from 'react';
import '../css/Movie.css';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500/';

class Movie extends Component {
  render() {
    let props = this.props;
    let hasMovie = this.props.title;
    let imgUrl = '';
    let genresList = [];
    let showClass = 'movie-hidden';
    let yearRelease;

    if (hasMovie) {
      imgUrl = IMG_BASE_URL + (props.poster_path ? props.poster_path : props.backdrop_path);
      genresList = props.genres.map((genre) =>
        <li key={genre.name}>{genre.name}</li>
      );
      showClass = 'movie-show';
      yearRelease = props.release_date.split('-')[0];
    }

    return (
      <section className={'Movie ' + showClass}>
        <article>
          <h1>{`${props.title} (${yearRelease})`}</h1>
          <img src={imgUrl} alt="" />
          <ul>
            {genresList}
          </ul>
          <p>{props.overview}</p>
        </article>
      </section>
    )
  }
};

export default Movie;