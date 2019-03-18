import React, { Component } from 'react'; 

class LandingPage extends Component {
  render(){
    return(
      <div>
        <div class="hero">
          <p>
            <h1>Bibliomancer</h1>
          </p>
          <p class="description">
            Are you ever stuck knowing that you want to read SOMETHING, but can't decide on what?  Do your interests include
            Fiction, Science Fiction/Fantasy, Classic Literature, or Self-Help?  If so, this is the place for you.  Bibliomancer 
            provides recommendations for you to take the guesswork out of what to read next.  You will also be able to track the books
            you have read and when finished with one, receive another recommendation.  Start reading again, today!
          </p>
          <p class="register">
            <button type="button" class="register-button">Register</button>
          </p>
        </div>
        <div class="feature-one">
            Get recommendations based on genre with screenshot
        </div>
        <div class="feature-two">
            Track books completed and badges with screenshot
        </div>
      </div>
    ) 
  }
}

export default LandingPage; 