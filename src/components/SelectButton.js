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
          <select onChange={this.handleGenre}>{options}</select>
          <button onClick={this.context.next}>Next Recommendation</button>
        </div>
      );
    }
  }

export default SelectButton; 