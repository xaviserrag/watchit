import React, { Component } from 'react';
import '../css/Movie.css';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500/';

class MovieOverview extends Component {
  render() {
    let movie = this.props.movie;

    let imagePath = movie.poster_path 
      ? movie.poster_path 
      : movie.backdrop_path;
    let imgUrl = IMG_BASE_URL + imagePath;
    
    let genresList = movie.genres.map((genre) =>
        <li key={genre.name}>{genre.name}</li>
      );
   
    let yearRelease = movie.release_date.split('-')[0];;
    let title = `${movie.title} (${yearRelease})`;

    let duration = '';
    if (movie.runtime) {
      duration = Math.floor(movie.runtime / 60) + 'h ' + movie.runtime % 60 + 'm';
    }

    return (
      <div className="MovieOverview">
        <h1>{title}</h1>
        <h3>{duration}</h3>
        <img src={imgUrl} alt="Movie poster" />
        <ul>
          {genresList}
        </ul>
      </div>
    )
  }
};

export default MovieOverview;