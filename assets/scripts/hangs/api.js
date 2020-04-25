'use strict'

// require necessary files

const config = require('../config.js')
const store = require('../store.js')


 // -------- Creating a New Hang API Call -----------
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


// -------- Show ALL Hangs API Call -----------
const showHangs = function () {
  return $.ajax({
    url: config.apiUrl + '/hangs',
    method: 'GET'
  })
}


// -------- Show MY Hangs API Call -----------
const showMyHangs = function () {
  return $.ajax({
    url: config.apiUrl + '/hangs',
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}


// -------- Delete a Hang API Call -----------
const deleteHang = function (id) {
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


// -------- Show MY Hangs API Call -----------
const updateHang = function (data, id) {
  console.log('in api.js: updateHang function has been called, id is: ', id)
  return $.ajax({
    url: config.apiUrl + '/hangs/' + id,
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data: data
  })
}


// -------- RSVP API Call -----------
const rsvpHang = function (id) {
  return $.ajax({
    url: config.apiUrl + '/hangs/' + id,
    method: 'GET',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
      data: id
  })
}


module.exports = {
  showHangs,
  newHang,
  deleteHang,
  updateHang,
  showMyHangs,
rsvpHang
}
