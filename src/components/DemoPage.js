import React, { Component } from 'react'; 
import SelectButton from './SelectButton'
import Recommendation from './Recommendation'
import Context from '../Context';
import { Link } from 'react-router-dom'
import './DemoPage.css'; 
class DemoPage extends Component {

  static contextType = Context; 

  handleGenre = g => {
    this.context.selectGenre(g.target.value);
  };

  dropdown() {
    const genres = Object.keys(this.context.genres);
    const options = genres.map((val, i) => (
      <option key={i} value={val}>
        {val}
      </option>
    ));
    return(
      <div className="controls">
        <select onChange={this.handleGenre}>{options}</select>
        <button onClick={this.context.next}>Next</button>
      </div>
    );
  }

  current() {
    const [preview] = this.context.current;
    console.log(preview);
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
          <p>{preview.description}</p>
          <button onClick={() => this.context.readIt(preview.id)}>
            Read It
          </button>
        </div>
      );
    }
  }

  renderRead(){
    const readBooks = this.context.read.map((val, i ) => (
      <img key={i} src={val.image} alt="book cover" />
    ));
    return (
      <div>
        <h3>Read</h3>
        <div className="read">{readBooks}</div>
      </div>
    );
  }

  render(){
    return (
      <div className="current">
        {this.current()}
        {this.dropdown()}
        <hr />
        {this.renderRead()}
      </div>
    ); 
  }
}

export default DemoPage; 