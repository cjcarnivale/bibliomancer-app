import React, { Component } from 'react';
import { Route, Switch }from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';  
import RegistrationPage from './components/RegistrationPage';
import DemoPage from './components/DemoPage'; 
import NotFoundPage from './components/NotFoundPage'; 
import Config from './config'
import Context from './Context';
class App extends Component {
  
  static contextType = Context

  constructor(props) {
    super(props); 
    this.state = {
      recommendation: [],
      error: null,
      index: 0
    };
  }
  
  getGenre =  (value) => {
    fetch(`${Config.API_ENDPOINT}/recommendation?genre=${value}`)
    .then(res => {
      if(res.ok) {
        return res.json(0)
      }
    })
    .then(resJson => { 
      this.setState({
        recommendation: resJson,
        index: 0
      })
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

  render(){

    const contextValue = {
      recommendation: this.state.recommendation,
      index: this.state.index, 
      getGenre: this.getGenre,
      browse: this.browse 
    }

    return (
      <main className='App'>
      <Switch>
        <Context.Provider value={contextValue}>
          <Route exact path='/' component={LandingPage}/>
          <Route path='/LoginPage' component={LoginPage}/>
          <Route path='/RegistrationPage' component={RegistrationPage}/>
          <Route path='/DemoPage' component={DemoPage}/>
        </Context.Provider>
        <Route component={NotFoundPage}/>
      </Switch>
      </main>
    );
  }
}
export default App;