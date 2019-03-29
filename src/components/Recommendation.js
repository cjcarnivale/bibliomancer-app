import React, { Component } from 'react';
import Context from '../Context';
import SelectButton from './SelectButton'

class Recommendation extends Component{
  static contextType = Context; 
    
  constructor(props){
      super(props);
      this.state = {
        reading: false
      }
    }

  handleReading = () => {
    this.setState({
      reading: !this.state.reading
    })
  }

  render() {
    const [preview] = this.context.current;
    if (preview === undefined){
      return (
        <div className="selection empty">
          <h3>
            No Remaining Book in {this.context.genre} Genre.
          </h3>
          <SelectButton disable="true"/>
        </div>
      );
    } else {
      return (
        <div className="selection">
          <h3 id="title">{preview.title}</h3>
          <h4>by {preview.author}</h4>
          <img src={preview.image} alt="book cover"/>
          <br />
          <p className="description">{preview.description}</p>
          <div>
          {/*Displays Read This button on Demo Page, but not the Landing Page  */}
          {(this.props.showButton)
          // Toggles buttons on and off depdning on if Read This has been clicked, effectively locking the UI 
          //into displaying the user's current selection
            ?(!this.state.reading)
              //if reading is false, display the approprate selection buttons
              ?<div>
                <SelectButton />
                <div className="read-this">
                  <button id="read-this"onClick={this.handleReading}>
                    Read This
                  </button>
                </div>
              </div>
              //if reading is true, display Different Selection and Read This
              :<div className="selection-buttons">
                <button id="different-selection" onClick={this.handleReading}>
                  Different Selection
                </button>
                <button id="read-it" onClick={() => {this.context.readIt(preview.id); this.handleReading()}}>
                  <a href="#title">Read It!</a>
                </button>
              </div>
            :
            <div></div>
          }
          </div>
        </div>
      );
    }
  }

}

export default Recommendation