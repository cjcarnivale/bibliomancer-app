import React, { Component } from 'react'; 

class RegistrationPage extends Component {
  render(){
    return(
      <form>
        <legend>Register</legend>
        <label for="fullname">Full Name:</label>
        <input type="text" id="fullname"/>
        <label for="username">User Name:</label>
        <input type="text" id="username"/> 
        <label for="password">Password:</label>
        <input type="text" id="password"/>
        <input type="submit"/>
    </form>
    ) 
  }
}

export default RegistrationPage; 