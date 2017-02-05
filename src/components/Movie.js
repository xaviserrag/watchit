import React, { Component } from 'react';
import MovieOverview from './MovieOverview';
import MovieSynopsis from './MovieSynopsis';
import '../css/Movie.css';

class Movie extends Component {
  render() {
    let props = this.props;
    let hasMovie = props.title;

    if (hasMovie) {
      return (
        <section className={'Movie'}>
          <article>
            <MovieOverview movie={props} />
            <MovieSynopsis movie={props} />
          </article>
        </section>
      )
    } else {
      return <div></div>
    }
    
  }
};

export default Movie;