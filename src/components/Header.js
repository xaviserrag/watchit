import React, { Component } from 'react';
import '../css/Header.css';

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <img src="logo-white.png" alt="logo" />
        <div className="top-placeholder"> ADVERTISMENT! </div>
      </div>
    ); 
  }
};

export default Header;