
// require necessary files

const config = require('../config.js')
const store = require('../store.js')

const showHangs = function () {
  return $.ajax({
    url: config.apiUrl + '/hangs',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}

module.exports = {
  showHangs
}
