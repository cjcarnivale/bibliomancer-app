import React, { Component } from 'react'; 
import Context from '../Context';

class SelectButton extends Component {
  static contextType = Context; 

  handleGenre = g => {
    this.context.selectGenre(g.target.value);
  };

  render(){
  
    const genres = Object.keys(this.context.genres);
    const options = genres.map((val, i) => (
      <option key={i} value={val}>
        {val}
      </option>
    ));

      return(
        <div className="controls">
          <select value={this.context.genre}onChange={this.handleGenre}>{options}</select>
          <button id="new-book" onClick={this.context.next}><a href="#title">New Book</a></button>
        </div>
      );
    }
  }

export default SelectButton; 