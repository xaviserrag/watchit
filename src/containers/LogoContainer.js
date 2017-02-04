import React, { Component } from 'react';
import { connect } from 'react-redux';

const mapStateToProps = (state) => state.movies.movie || {};

class Logo extends Component {
  render () {
    console.log(this.props)
    return (
      <div>
        <img className="logo" src="themoviedb.png" alt="watchit logo" />
      </div>
    )
  }
};

Logo = connect(mapStateToProps)(Logo);

export default Logo;