import React, { Component } from 'react';
import Context from '../Context';
class Recommendation extends Component{
  static contextType = Context; 
  render(){
    return(
      <div className="reco">
        <img id="book-cover" src={this.context.recommendation[this.context.index].image} alt="book cover" />
        <ul className="book-details">
          <li>Title: {this.context.recommendation[this.context.index].title}</li>
          <li>Author: {this.context.recommendation[this.context.index].author}</li>
          <li>Description: {this.context.recommendation[this.context.index].description}</li>
        </ul>
      </div>
      )
  }
}

export default Recommendation