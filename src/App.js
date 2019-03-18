import React, { Component } from 'react';
import { Route, Switch }from 'react-router-dom';
import LandingPage from './components/LandingPage';
import LoginPage from './components/LoginPage';  
import RegistrationPage from './components/RegistrationPage';
import ProfilePage from './components/ProfilePage'; 
import NotFoundPage from './components/NotFoundPage'; 
class App extends Component {
  render(){
    return (
      <main className='App'>
      <Switch>
        <Route exact path='/' component={LandingPage}/>
        <Route path='/LoginPage' component={LoginPage}/>
        <Route path='/RegistrationPage' component={RegistrationPage}/>
        <Route path='/ProfilePage' component={ProfilePage}/>
        <Route component={NotFoundPage}/>
      </Switch>
      </main>
    );
  }
}
export default App;