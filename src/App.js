import React, { Component } from 'react';

import MovieContainer from './containers/MovieContainer';
import FooterContainer from './containers/FooterContainer';

import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MovieContainer />
        <FooterContainer />
      </div>
    );
  }
}

export default App;
