import React, { Component } from 'react'; 
import { Link } from 'react-router-dom'
import Recommendation from './Recommendation'
import SelectButton from './SelectButton'
import './LandingPage.css'; 
import Context from '../Context';
class LandingPage extends Component {
  
  static contextType = Context; 

  render(){
    return(
      <div className="container">
        <div className="hero">
          <h1>Bibliomancer</h1>
          <div className="description">
            <p>Are you ever stuck knowing that you want to read SOMETHING, but can't decide on what? </p> 
            <p>Do your interests include Fiction, Science Fiction/Fantasy, Classic Literature, or Self-Help?  
              If so, this is the place for you.</p>  
            <p>Bibliomancer provides recommendations for you to take the guesswork out of what to read next.  
              You will also be able to track the books you have read and when finished with one, receive another recommendation.</p>  
            <p>Start reading again, today!</p>
          </div>
        </div>
        <div className="recommendation">
          <h2>Take a Look at Our Recommendations</h2>
          <hr />
          <Recommendation showButton={false} />
          <SelectButton />
        </div>
        <div>
          <h2>Choose a book to read and track what 
            you have read in our interactive demo!
          </h2>
          <div className="demo-button-container">
              <Link className="demo-page-link" to='/DemoPage'>
                <button className="demo-button" type="button">Interactive Demo</button>
              </Link>
            </div>
        </div>
      </div>
    )}
}

export default LandingPage; 