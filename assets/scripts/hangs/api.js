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

const deleteHang = function(id) {
  console.log(id)
  return $.ajax({
    url: config.apiUrl + '/hangs/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: id
  })
}

// const deleteWord = function(id) {
//   return $.ajax({
//     url: config.apiUrl + '/vocabs/' + id,
//     method: 'DELETE',
//     headers: {
//       Authorization: 'Token token=' + store.user.token
//     },
//     data: id
//   })
// }

module.exports = {
  showHangs,
  newHang,
  deleteHang
}
