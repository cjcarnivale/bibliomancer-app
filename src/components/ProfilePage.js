import React, { Component } from 'react'; 

class ProfilePage extends Component {
  render(){
    return(
      <div>
        <h1>Username</h1>
        <div class="current-recommendation">
          <p>
            Display current recommendation along with description, title, and picture
          </p>
          <p class="decision buttons">
            <button type="submit" class="complete-button">Complete</button>
            <button type="submit" class="get-another">Get New Recommendation</button>
          </p>
        </div>
        <div class="books-completed">
          Display books the user has marked as read with picture and title
        </div>
        <div class="badges">
          Display badges the user has earned
        </div>
      </div>
    ) 
  }
}

export default ProfilePage; 