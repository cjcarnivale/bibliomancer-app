import React, { Component } from 'react';
class Recommendation extends Component{
  
  componentDidMount(){
    this.props.getRecommendation(); 
  }

  render(){
    return(
        <p>
          Name: {this.props.recommendation.name}
          Author: {this.props.recommendation.author}
          Description: {this.props.recommendation.description}
          Image: <img src={this.props.recommendation.image} alt="book cover" />
        </p>
      )
  }
}

export default Recommendation