// const axios = require('axios');

class Authentication {
  verification(token, callback) {
    if (token) {
      let config = new CONFIG();
      let url = config.url(location.protocol) + '/verification';
      axios.post(url, JSON.stringify({
        token: token
      })
      ).then( res => {
        console.log("Authentication succeeded");
        callback(true)
      }).catch( err => {
        alert("The Expired Token");
        localStorage.clear();
        callback(false)
      });
    } else {
      alert("The token is undefined");
      callback(false)
    }
  }

  login(name, password, callback) {
    let config = new CONFIG();
    let url = config.url(location.protocol) + '/login';
    axios.post(url, JSON.stringify({
      name: name,
      password: password
    })).then( res => {
      callback(res)
    }).catch( err => {
      callback(err.response)
    });
  }

  logout() {
    localStorage.clear()
  }

}
