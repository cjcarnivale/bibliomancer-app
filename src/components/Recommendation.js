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
    console.log(this.props.showButton)
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
          <h2>{preview.title}</h2>
          <h3>by {preview.author}</h3>
          <img src={preview.image} alt="book cover"/>
          <br />
          <p className="description">{preview.description}</p>
          {
          (this.props.showButton)
            ?
            (!this.state.reading)
              ?
              <div>
                <button onClick={this.handleReading}>
                  Read This
                </button>
                <SelectButton />
              </div>
              :
              <div>
                <button onClick={this.handleReading}>
                  Different Selection
                </button>
                <button onClick={() => {this.context.readIt(preview.id); this.handleReading()}}>
                  Read It!
                </button>
              </div>
            :
            <div></div>
          }
        </div>
      );
    }
  }

}

export default Recommendation