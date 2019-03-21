import React, { Component } from 'react'; 
import SelectButton from './SelectButton'
import Recommendation from './Recommendation'
import Context from '../Context';
class DemoPage extends Component {
  
  static contextType = Context; 

  componentDidMount(){
    this.context.getGenre('fiction'); 
  }

  render(){
    return(
      <div>
        <h1>Demo Page</h1>
        <div className="current-recommendation">
          <div className="recommendation">
          {
            (this.context.recommendation.length === 0) 
            ? 
            <div>Loading...</div> 
            :
            <Recommendation/>
          }
        </div>
          <SelectButton />
            <button type="submit" className="complete-button">Complete</button>
            <button type="submit" className="get-another">Get New Recommendation</button>
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

export default DemoPage; 