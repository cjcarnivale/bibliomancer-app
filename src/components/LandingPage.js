import React, { Component } from 'react'; 
import Recommendation from './GetRecommendation'
class LandingPage extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      recommendation: {},
      genre:'fiction'
    };
  }

  setGenre = (event) => {
    this.setState({
      genre: event.target.value 
    })
  }

  getRecommendation = () => {
    fetch(`http://localhost:8000/api/recommendation?genre=${this.state.genre}`)
    .then(response => response.json())
    .then(data => {
      console.log(data)
      if(!this.state.recommendation.id || this.state.recommendation.id === data.length){
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
          <Recommendation 
            getRecommendation={this.getRecommendation} recommendation={this.state.recommendation}
            setGenre={this.setGenre}/>
          <button type="button" onClick={this.getRecommendation}>Get New Recommendation</button>
          <select onChange={(event) => this.setGenre(event)}>
            <option value="fiction">Fiction</option>
            <option value="fantasy">Science Fiction/Fantasy</option>
            <option value='literature'>Literature</option>
            <option value='help'>Self-Help</option>
          </select>
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