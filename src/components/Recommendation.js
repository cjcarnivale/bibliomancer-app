import React, { Component } from 'react';
class Recommendation extends Component{
  
  render(){
    return(
      <div className="reco">
        <img id="book-cover" src={this.props.recommendation.image} alt="book cover" />
        <ul className="book-details">
          <li>Title: {this.props.recommendation.title}</li>
          <li>Author: {this.props.recommendation.author}</li>
          <li>Description: {this.props.recommendation.description}</li>
        </ul>
      </div>
      )
  }
}

export default Recommendation