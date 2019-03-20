import React, { Component } from 'react';
class Recommendation extends Component{
  
  render(){
    return(
      <div className="reco">
        <p>
          Name: {this.props.recommendation.title}
          Author: {this.props.recommendation.author}
          Description: {this.props.recommendation.description}
          Image: <img src={this.props.recommendation.image} alt="book cover" />
        </p>
      </div>
      )
  }
}

export default Recommendation