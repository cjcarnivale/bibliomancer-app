import React, { Component } from 'react';
class Recommendation extends Component{
  
  render(){
    return(
      <div className="reco">
        <img src={this.props.recommendation.image} alt="book cover" />
        <ul>
          <li>Title: {this.props.recommendation.title}</li>
          <li>Author: {this.props.recommendation.author}</li>
          <li>Description: {this.props.recommendation.description}</li>
        </ul>
      </div>
      )
  }
}

export default Recommendation