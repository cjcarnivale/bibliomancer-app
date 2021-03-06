import React, { Component } from 'react';
import { Route, Switch }from 'react-router-dom';
import LandingPage from './components/LandingPage';
import DemoPage from './components/DemoPage'; 
import NotFoundPage from './components/NotFoundPage'; 
import './index.css';
class App extends Component {
  
  render(){

    return (
      <main className='App'>
          <Switch>
            <Route exact path='/' component={LandingPage}/>
            <Route path='/DemoPage' component={DemoPage}/>
            <Route component={NotFoundPage}/>
          </Switch>
      </main>
      
    );
  }
}
export default App;