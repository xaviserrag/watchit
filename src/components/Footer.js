import React, { Component } from 'react';
import '../css/Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className="Footer">
        <button onClick={this.props.onGetMovieClick} >Give me a movie!</button>
        <div className="Moviesdb-logo">
          <a href="https://www.themoviedb.org">
            <img src="themoviedb.png" alt="themoviedb logo"/>
          </a>
        </div>  
      </div>
    );
  }
};

export default Footer;