// const axios = require('axios');

class Authentication {
  verification(token, callback) {
    if (token) {
      axios.post('http://localhost:4567/verification', JSON.stringify({
        token: token
      })
      ).then( res => {
        console.log("Authentication succeeded");
        callback(true)
      }).catch( err => {
        console.error("The Expired Token");
        sessionStorage.clear();
        callback(false)
      });
    } else {
      console.error("The token is undefined");
      callback(false)
    }
  }

  login(name, password, callback) {
    axios.post('http://localhost:4567/login', JSON.stringify({
      name: name,
      password: password
    })).then( res => {
        callback(res)
    }).catch( err => {
        callback(err.response)
    });
  }

  logout() {
    sessionStorage.clear()
  }

}