import React, { Component } from 'react';

import MovieContainer from './containers/MovieContainer';
import FooterContainer from './containers/FooterContainer';
import LogoContainer from './containers/LogoContainer';
import GenreContainer from './containers/GenreContainer';
import Header from './components/Header';

import './css/App.css';

class App extends Component {
  render() {

    return (
      <div className="App">
        <Header />
        <LogoContainer />
        <MovieContainer />
        <FooterContainer />
      </div>
    );
  }
}

export default App;
