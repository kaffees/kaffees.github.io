class CONFIG {
  url(protocol) {
    if (protocol == "https:") {
      return 'https://kaffees.herokuapp.com'
    } else {
      return 'http://localhost:4567'
    }
  }
  wsurl(protocol) {
    if (protocol == "https:") {
      console.log(protocol);
      return 'wss://kaffees.herokuapp.com'
    } else {
      return 'ws://localhost:4567'
    }
  }
}
