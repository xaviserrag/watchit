import React, { Component } from 'react';
// import { findDOMNode } from 'react-dom';

import MovieOverview from './MovieOverview';
// import MovieSynopsis from './MovieSynopsis';
import '../css/Movie.css';

class Movie extends Component {

  componentWillUpdate() {
    setTimeout(() => {
      let item = document.getElementById('Movie');
      if (item) {
        item.scrollTop = 0;
      }
    }, 500)
  }

  render() {
    let movie = this.props.movie;
    let hasMovie = movie.title;

    let isLoadingClass = (this.props.isFetching ? 'movie-easeout' : 'movie-easein');

    if (hasMovie) {
      return (
        <div className="MovieContainer">
          <section id="Movie" className={isLoadingClass}>
            <article>
              <MovieOverview movie={movie} />
            </article>
          </section>
        </div>
      )
    } else {
      return <div></div>
    }
    
  }
};

export default Movie;