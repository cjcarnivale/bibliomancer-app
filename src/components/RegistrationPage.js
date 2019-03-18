import React, { Component } from 'react'; 

class RegistrationPage extends Component {
  constructor(props){
    super(props);
    this.state = {
      error: null 
    }
  }
  // postUser(user) {
  //   return fetch('http://local:8000/', {
  //     method: 'POST',
  //     headers: {
  //       'content-type': 'application/json'
  //     },
  //     body: JSON.stringify(user)
  //   })
  //     .then(res => 
  //       (!res.ok)
  //         ?res.json().then(e => Promise.reject(e))
  //         :res.json()); 
  // }

  // handleSubmit = (event) => {
  //   event.preventDefault(); 
  //   const { fullname, username, password } = event.target
  //   this.setState({ error:null })
  //   this.postUser(
  //     {
  //       fullname: fullname.value,
  //       username: username.value,
  //       password: password.value
  //     }
  //   )
  // }
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