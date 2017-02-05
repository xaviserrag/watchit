import React, { Component } from 'react';

import MovieContainer from './containers/MovieContainer';
import FooterContainer from './containers/FooterContainer';
import LogoContainer from './containers/LogoContainer';

import './css/App.css';

class App extends Component {
  render() {

    return (
      <div className="App">
        <LogoContainer />
        <MovieContainer />
        <FooterContainer />
      </div>
    );
  }
}

export default App;
