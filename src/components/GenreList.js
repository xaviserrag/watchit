import React, { Component } from 'react';
import '../css/GenreList.css';

class GenreList extends Component {

  componentWillUpdate() {
  }

  render() {
    let listOfGenres = [];
    let genreList = {
      comedy: 'comedy',
      drama: 'drama',
      action: 'action',
      documentary: 'documentary',
      history: 'history'
    }
    for (let key in genreList) {
      let genre = genreList[key];
      let className = this.props.selectedGenres.filter((item) => {
        return key === item
      }).length > 0 ? 'genre-selected' : ''
      console.log(className)
      listOfGenres.push(
        <li className={className} onClick={() => {this.props.onSelectGenre(key)}} key={key}>{genre}</li>
      )
    }

    return (
    <ul id="GenreList">
      {listOfGenres}
    </ul>
    )
  }
};

export default GenreList;