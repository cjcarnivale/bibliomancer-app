import React, { Component } from 'react'; 
import Context from '../Context';

class SelectButton extends Component {
  static contextType = Context; 

  render(){
    return(
      <div className="button-container">
          <label htmlFor="select">Change Genre: </label>
          <select id="select" onChange={(event) => this.context.getGenre(event.target.value)}>
            <option value="fiction">Fiction</option>
            <option value="fantasy">Science Fiction/Fantasy</option>
            <option value='literature'>Literature</option>
            <option value='help'>Self-Help</option>
          </select>
        
          <button type="button" onClick={this.context.browse}>Get New Recommendation</button>
      </div>
    ) 
  }
}

export default SelectButton; 