import React, { Component } from 'react'; 
import TokenService from '../services/token-service'
class LoginPage extends Component {

  handleSubmitBasicAuth = (event) => {
    event.preventDefault()
    const { user_name, password } = event.target
    TokenService.saveAuthToken(
      TokenService.makeBasicAuthToken(user_name.value, password.value)
    )
    user_name.value = '';
    password.value = ''; 
  }
  render(){
    return(
      <form onSubmit={this.handleSubmitBasicAuth}>
      <legend>Log In</legend>
          <label htmlFor="username_name">User Name:</label>
          <input name="user_name" type="text" id="username"/> 
          <label htmlFor="password">Password:</label>
          <input name="password" type="text" id="password"/>
          <input type="submit"/>
    </form>
    ) 
  }
}

export default LoginPage; 