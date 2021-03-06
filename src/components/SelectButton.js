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
      </option>));

      return(
        <div className="controls">
        <form>
          <label htmlFor="select-genre">Select Genre: </label>
            <select id="select-genre" value={this.context.genre}onChange={this.handleGenre}>{options}</select>
        </form>
          {/* Disables the New Book button if all books in a genre have been read */}
          {(!this.props.disable)
          ?<button id="new-book" onClick={this.context.next}><a href='#title'>See Another Selection</a></button>
          :<div></div>}
        </div>
      );
    }
  }

export default SelectButton; 