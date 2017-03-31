import React, { Component } from 'react';
import '../css/GenreList.css';

class GenreList extends Component {

  componentWillUpdate() {
  }

  render() {
    console.log(this.props);

    let listOfGenres = [];
    for (let key in this.props.genreList) {
      listOfGenres.push(
        <li key={key}>this.props.genreList[key]</li>
      )
    }

    return (
    <div className="GenreList">
        <ul>
          {listOfGenres}
        </ul>
    </div>
    )
  }
};

export default GenreList;