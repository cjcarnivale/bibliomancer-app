import React, { Component } from 'react'; 

class LoginPage extends Component {
  render(){
    return(
      <form>
      <legend>Log In</legend>
          <label for="username">User Name:</label>
          <input type="text" id="username"/> 
          <label for="password">Password:</label>
          <input type="text" id="password"/>
          <input type="submit"/>
    </form>
    ) 
  }
}

export default LoginPage; 