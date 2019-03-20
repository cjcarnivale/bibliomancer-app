import React, { Component } from 'react'; 
import Recommendation from './Recommendation'
import './LandingPage.css'; 
import { API_ENDPOINT } from '../config'
class LandingPage extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      recommendation: [],
      error: null,
      index: 0
    };
  }

  componentDidMount(){
    this.getGenre('fiction')
  }

  getGenre = (value) => {
    fetch(`${API_ENDPOINT}/recommendation?genre=${value}`)
    .then(res => {
      if(res.ok) {
        return res.json(0)
      }
    })
    .then(resJson => { 
      this.setState({
        recommendation: resJson,
        index: 0
      })
    })
    .catch (err => {
      this.setState({
        error: err.message
      })
    })
  }

  browse = () => {
    if(this.state.index >= this.state.recommendation.length-1){
      this.setState({
        index:0
      })
    } else {
      this.setState({
        index: this.state.index + 1
      })
    }
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
          {
            (this.state.recommendation.length === 0) 
            ? 
            <div>Loading...</div> 
            :
            <Recommendation recommendation={this.state.recommendation[this.state.index]}/>
          }
        </div>

        <div className="button-container">  
          
          <label htmlFor="select">Change Genre: </label>
          <select id="select" onChange={(event) => this.getGenre(event.target.value)}>
            <option value="fiction">Fiction</option>
            <option value="fantasy">Science Fiction/Fantasy</option>
            <option value='literature'>Literature</option>
            <option value='help'>Self-Help</option>
          </select>
        
          <button type="button" onClick={this.browse}>Get New Recommendation</button>
        
        </div>
      </div>
      // <div className="feature-one">
      //   Get recommendations based on genre with screenshot
      // </div>
      // <div className="feature-two">
      //   Track books completed and badges with screenshot
      // </div>
    )}
}

export default LandingPage; 