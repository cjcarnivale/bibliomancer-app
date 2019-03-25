import React, { Component } from 'react';
import { Route, Switch }from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';  
import RegistrationPage from './components/RegistrationPage';
import DemoPage from './components/DemoPage'; 
import NotFoundPage from './components/NotFoundPage'; 
import Config from './config'
import Context from './Context';
import CommentsPage from './components/CommentsPage'
class App extends Component {
  
  static contextType = Context

  constructor(props) {
    super(props); 
    this.state = {
      recommendation: [],
      read: [],
      error: null,
      index: 0,
      currRec: []
    };
  }

  handleSelectRec = () => {
    this.setState({
      currRec: this.state.currRec.concat(this.state.recommendation[this.state.index])
    })
  }

  handleChooseNew = () => {
    this.setState({
      currRec: []
    })
  }
  
  getGenre =  (value) => {
    fetch(`${Config.API_ENDPOINT}/recommendation?genre=${value}`)
    .then(res => {
      if(res.ok) {
        return res.json(0)
      }
    })
    .then(resJson => {
      this.filterList(resJson, this.state.read)
    })
    .catch (err => {
      this.setState({
        error: err.message
      })
    })
  } 

  browse = () => {
    if(this.state.index >= this.state.recommendation.length-1){
      this.setState({
        index:0
      })
    } else {
      this.setState({
        index: this.state.index + 1
      })
    }
  }

  filterList = (recommendations, read) => {
    if(read.length === 0){
      this.setState({
        recommendation: recommendations
      })
    }
    else{
      const unreadList = this.state.read.reduce((recs, read) => {
        return recs.filter(rec => rec.id !== read.id)
      }, this.state.recommendation) 
      this.setState({
        recommendation: unreadList
      })
    }
  }

  handleRead = () =>{ 
    this.setState({
      read: [...this.state.read, this.state.currRec[0]],
    })
    this.handleChooseNew()
    this.getGenre('fiction');
  }

  render(){

    return (
      <main className='App'>
        <Switch>
          <Route exact path='/' component={LandingPage}/>
          <Route path='/LoginPage' component={LoginPage}/>
          <Route path='/RegistrationPage' component={RegistrationPage}/>
          <Route path='/DemoPage' component={DemoPage}/>
          <Route path='/CommentsPage/:bookId' component={CommentsPage}/>
          <Route component={NotFoundPage}/>
        </Switch>
      </main>
    );
  }
}
export default App;