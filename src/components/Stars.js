import React, { Component } from 'react';
import '../css/Stars.css';

class Stars extends Component {
  render() {
    let pct = Math.round(this.props.rating);

    if (this.props.votes > 0) {
      return (
        <div className="Stars">
          <div className={'full-stars star-' + pct}></div> 
          <div className="empty-stars"></div>
        </div>
      )
    } else {
      return (
        <div className="Stars">
          <span>No ratings</span>
        </div>
      )
    }
  }
};

export default Stars;