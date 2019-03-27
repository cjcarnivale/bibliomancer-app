import React, { Component } from 'react'; 
import Recommendation from './Recommendation'
import Context from '../Context';
// import './DemoPage.css'; 
class DemoPage extends Component {

  static contextType = Context; 

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
      <div className="container">
        <div className="current">
          <Recommendation showButton={true}/>
          <hr />
          {this.renderRead()}
        </div>
      </div>  
    ); 
  }
}

export default DemoPage; 