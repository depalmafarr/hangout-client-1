'use strict'

// require necessary files

const config = require('../config.js')
const store = require('../store.js')

const newHang = function (data) {
  console.log(data)
  return $.ajax({
    url: config.apiUrl + '/hangs',
    method: 'POST',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}

const showHangs = function () {
  return $.ajax({
    url: config.apiUrl + '/hangs',
    method: 'GET'
  })
}

module.exports = {
  showHangs,
  newHang

}
