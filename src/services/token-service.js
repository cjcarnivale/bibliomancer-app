import config from '../config'; 

const TokenService = {
  makeBasicAuthToken(userName, password){
    return window.btoa(`${userName}:${password}`); 
  },
  saveAuthToken(token) {
    window.sessionStorage.setItem(config.TOKEN_KEY, token)
  }

}

export default TokenService