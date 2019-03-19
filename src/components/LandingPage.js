import React, { Component } from 'react'; 
import Recommendation from './GetRecommendation'
class LandingPage extends Component {
  constructor(props) {
    super(props); 
    this.state = {
     recommendation: {}
    };
  }

  getRecommendation = () => {
    fetch('http://localhost:8000/api/recommendation')
    .then(response => response.json())
    .then(data => {
      if(!this.state.recommendation.id){
        const recommendation = data[0]; 
        this.setState({
          recommendation
        })
      }
      else{
        const recommendation = data[this.state.recommendation.id];
        this.setState({
          recommendation 
        })
      }
    })
  } 

  render(){
    return(
      <div>
        <div className="hero">
          <h1>Bibliomancer</h1>
          <p className="description">
            Are you ever stuck knowing that you want to read SOMETHING, but can't decide on what?  Do your interests include
            Fiction, Science Fiction/Fantasy, Classic Literature, or Self-Help?  If so, this is the place for you.  Bibliomancer 
            provides recommendations for you to take the guesswork out of what to read next.  You will also be able to track the books
            you have read and when finished with one, receive another recommendation.  Start reading again, today!
          </p>
        </div>
        <div className="recommendation">
          <Recommendation getRecommendation={this.getRecommendation} recommendation={this.state.recommendation}/>
          <button type="button" onClick={this.getRecommendation}>Get New Recommendation</button>
        </div>
        <div className="feature-one">
            Get recommendations based on genre with screenshot
        </div>
        <div className="feature-two">
            Track books completed and badges with screenshot
        </div>
      </div>
    ) 
  }
}

export default LandingPage; 