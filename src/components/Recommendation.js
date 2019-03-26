import React, { Component } from 'react';
import Context from '../Context';
import SelectButton from './SelectButton'
import './DemoPage.css'
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
          {
          (this.props.showButton)
            ?
            (!this.state.reading)
              ?
              <div>
                <SelectButton />
                <div className="read-this">
                  <button onClick={this.handleReading}>
                    Read This
                  </button>
                </div>
              </div>
              :
              <div>
                <button onClick={this.handleReading}>
                  Different Selection
                </button>
                <button onClick={() => {this.context.readIt(preview.id); this.handleReading()}}>
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