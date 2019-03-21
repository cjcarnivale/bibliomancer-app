import React, { Component } from 'react'; 

class ProfilePage extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      recommendation: {}
    };
  }
  
  render(){
    return(
      <div>
        <h1>Username</h1>
        <div className="current-recommendation">
          
          <p className="decision buttons">
            <button type="submit" className="complete-button">Complete</button>
            <button type="submit" className="get-another">Get New Recommendation</button>
          </p>
        </div>
        <div className="books-completed">
          Display books the user has marked as read with picture and title
        </div>
        <div className="badges">
          Display badges the user has earned
        </div>
      </div>
    ) 
  }
}

export default ProfilePage; 