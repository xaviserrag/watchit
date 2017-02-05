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
    let hours;
    let minutes;
    let title = '';
    let duration = '';

    if (hasMovie) {
      imgUrl = IMG_BASE_URL + (props.poster_path ? props.poster_path : props.backdrop_path);
      genresList = props.genres.map((genre) =>
        <li key={genre.name}>{genre.name}</li>
      );
      showClass = 'movie-show';
      yearRelease = props.release_date.split('-')[0];
      title = `${props.title} (${yearRelease})`;
      if (props.runtime) {
        duration = Math.floor(props.runtime / 60) + 'h ' + props.runtime % 60 + 'm';
      }
   }

    return (
      <section className={'Movie ' + showClass}>
        <article>
          <h1>{title}</h1>
          <h3>{duration}</h3>
          <img src={imgUrl} alt="" />
          <ul>
            {genresList}
          </ul>
          <p>{  }</p>
          <p>{props.overview}</p>
        </article>
      </section>
    )
  }
};

export default Movie;