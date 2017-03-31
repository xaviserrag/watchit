import React, { Component } from 'react';
import '../css/GenreList.css';

class GenreList extends Component {

  componentWillUpdate() {
  }

  render() {
    let listOfGenres = [];
    for (let key in this.props.genreList) {
      let genre = this.props.genreList[key];
      let className = this.props.selectedGenres.filter((item) => {
        return key === item
      }).length > 0 ? 'genre-selected' : ''
      console.log(className)
      listOfGenres.push(
        <li className={className} onClick={() => {this.props.onSelectGenre(key)}} key={key}>{genre}</li>
      )
    }

    return (
    <div id="GenreList">
        <ul>
          {listOfGenres}
        </ul>
    </div>
    )
  }
};

export default GenreList;