import React, { Component } from 'react';
import logo from '../../public/logo.svg';
import '../css/App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
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
