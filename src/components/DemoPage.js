import React, { Component } from 'react'; 
import SelectButton from './SelectButton'
import Recommendation from './Recommendation'
import Context from '../Context';
import './DemoPage.css'; 
class DemoPage extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      currRec: [],
      read: []
    };
  }

  
  static contextType = Context; 

  componentDidMount(){
    this.context.getGenre('fiction'); 
  }

  handleSelectRec = () => {
    this.setState({
      currRec: [this.context.recommendation[this.context.index]]
    })
  }

  handleChooseNew = () => {
    this.setState({
      currRec: []
    })
  }

  handleRead = () =>{
    this.setState({
      read: [...this.state.read, this.state.currRec[0]]

    })
  }

  render(){
    return(
      <div>
        <h1>Demo Page</h1>
        {(this.state.currRec.length === 0)
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
            <Recommendation/>
          }
        </div>
        <div>
          {(this.state.currRec.length === 0)
            ?
            <div className="select-button">
            <SelectButton />
              <button onClick={this.handleSelectRec} type="button">Select Recommendation</button>
            </div>
            :
            <div>
              <button onClick={this.handleChooseNew} type="button">Choose New Recommendation</button>
              <button onClick={this.handleRead} type="button">I Read It!</button> 
            </div>
            }
        </div>
      </div>
    ) 
  }
}

export default DemoPage; 