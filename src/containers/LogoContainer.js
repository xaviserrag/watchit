import React, { Component } from 'react';
import { connect } from 'react-redux';
import '../css/Logo.css';
const mapStateToProps = (state) => state.movies || {};

class Logo extends Component {
  render () {
    // If no movie in the state, the logo should be shown in the center
    // if there is a movie, the logo should go on top of the screen.
    const hasMovie = this.props.movie.title;
    const logoClass = hasMovie ? 'logo-top' : 'logo-centered';

    let logoAnimation = '';
    if (this.props.isFetching) {
      logoAnimation = 'logo-easeout';
    }

    return (
      <div className={logoClass}>
        <span></span>
        <img className={logoAnimation} src="watchit-logo.png" alt="watchit logo" />
      </div>
    )
  }
};

Logo = connect(mapStateToProps)(Logo);

export default Logo;