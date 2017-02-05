import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/Logo.css';
const mapStateToProps = (state) => state.movies.movie || {};

class Logo extends Component {
  render () {
    // If no movie in the state, the logo should be shown in the center
    // if there is a movie, the logo should go on top of the screen.
    const hasMovie = this.props.title;
    const logoClass = hasMovie ? 'logo-top' : 'logo-centered';

    return (
      <div className={logoClass}>
        <span class="logo-helper"></span>
        <img className="logo" src="themoviedb.png" alt="watchit logo" />
      </div>
    )
  }
};

Logo = connect(mapStateToProps)(Logo);

export default Logo;