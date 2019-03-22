import React, { Component } from 'react'; 
import SelectButton from './SelectButton'
import Recommendation from './Recommendation'
import Context from '../Context';
import './DemoPage.css'; 
class DemoPage extends Component {

  static contextType = Context; 


  componentDidMount(){
    this.context.getGenre('fiction');
  }

  render(){

    return(
      <div>
        <h1>Demo Page</h1>
        {(this.context.currRec.length === 0)
          ?
          <div></div>
          :
          <h2>Current Selected Recommendation</h2>
        }
        <div className="current-recommendation">
          {
            (this.context.recommendation.length === 0) 
            ? 
            <div>Loading...</div> 
            :
            <Recommendation />
          }
        </div>
        <div className="select-button">
          {(this.context.currRec.length === 0)
            ?
            <div>
            <SelectButton />
              <button onClick={this.context.handleSelectRec} type="button">Select Recommendation</button>
            </div>
            :
            <div className="selected-recommendation-buttons">
              <button onClick={this.context.handleChooseNew} type="button">Choose New Recommendation</button>
              <button onClick={this.context.handleRead} type="button">I Read It!</button> 
            </div>
            }
        </div>
        <div>
          {(this.context.read.length === 0)
            ?
            <div></div>
            :
            <div className="read-list">
              <h2>Completed Books</h2>
              <hr/>
              {this.context.read.map(book => 
                <div className="book">
                  <img src={book.image} alt='book cover' />
                  <p>{book.title}</p>
                </div>
                )}
            </div>
          }
        </div>
      </div>
    ) 
  }
}

export default DemoPage; 