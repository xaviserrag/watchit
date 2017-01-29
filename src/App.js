import React, { Component } from 'react';

import MovieContainer from './containers/MovieContainer';

import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MovieContainer />
        <div className="App-footer">
          <div className="Moviesdb-logo">
            <img src="themoviedb.png" alt="themoviedb logo"/>
          </div>  
        </div>
      </div>
    );
  }
}

export default App;
