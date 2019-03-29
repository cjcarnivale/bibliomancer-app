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
          {(!this.props.disable)
          ?<button id="new-book" onClick={this.context.next}>New Book</button>
          :<div></div>}
        </div>
      );
    }
  }

export default SelectButton; 