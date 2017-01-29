import React, { Component } from 'react';

import MovieContainer from './containers/MovieContainer';
import Footer from './containers/Footer';

import './css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <MovieContainer />
        <Footer />
      </div>
    );
  }
}

export default App;
