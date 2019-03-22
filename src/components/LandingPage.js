import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'
import Recommendation from './Recommendation'
import SelectButton from './SelectButton'
import './LandingPage.css'; 
import Context from '../Context';
class LandingPage extends Component {
  
  static contextType = Context; 

  componentDidMount(){
    this.context.getGenre('fiction'); 
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
          <div className="demo">
            <Link to='/DemoPage'>
              <button className="demo-button" type="button">Interactive Demo</button>
            </Link>
          </div>
        </div>
        <div className="recommendation">
          {
            (this.context.recommendation.length === 0) 
            ? 
            <div>Loading...</div> 
            :
            <Recommendation />
          }
        </div>
        <SelectButton />
      </div>
    )}
}

export default LandingPage; 