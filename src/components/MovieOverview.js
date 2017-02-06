import React, { Component } from 'react';
import Stars from './Stars';
import '../css/MovieOverview.css';

const IMG_BASE_URL = 'https://image.tmdb.org/t/p/w500/';

class MovieOverview extends Component {
  render() {
    let movie = this.props.movie;

    let imagePath = movie.poster_path 
      ? movie.poster_path 
      : movie.backdrop_path;
    let imgUrl = IMG_BASE_URL + imagePath;
    

   
    let yearRelease = movie.release_date.split('-')[0];
    let title = `${movie.title} (${yearRelease})`;

    let duration = '';
    if (movie.runtime) {
      duration = Math.floor(movie.runtime / 60) + 'h ' + movie.runtime % 60 + 'm';
    }

    let durationAndGenre = duration;
    let genresList = movie.genres.map((genre) =>
      durationAndGenre += (' | ' + genre.name)
    );

    return (
      <div className="MovieOverview">
        <img src={imgUrl} alt="Movie poster" />
        <div className="basic-info">
          <span className="movie-title"><strong>{movie.title}</strong> {`(${yearRelease})`}</span>
          <Stars rating={movie.vote_average} votes={movie.vote_count} />
          <span className="movie-duration"><strong>{durationAndGenre}</strong></span>
          <p>{this.props.movie.overview}</p>
        </div>
      </div>
    )
  }
};

export default MovieOverview;