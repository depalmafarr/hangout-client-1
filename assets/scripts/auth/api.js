'use strict'

const config = require('../config')
const store = require('../store')
// const getFormFields = require('../../../lib/get-form-fields.js')



// -------- Sign Up  -----------
const signUp = function (data) {
  // console.log('In api.js')
  return $.ajax({
    url: config.apiUrl + '/sign-up',
    method: 'POST',
    data: data
  })
}



// -------- Sign In  -----------
const signIn = function (data) {
  // console.log('In api.js')
  return $.ajax({
    url: config.apiUrl + '/sign-in',
    method: 'POST',
    data
  })
}



// -------- Change Password  -----------
const changePassword = function (data) {
  // console.log('In api.js')
  return $.ajax({
    url: config.apiUrl + '/change-password',
    method: 'PATCH',
    headers: {
      Authorization: 'Token token=' + store.user.token
    },
    data
  })
}



// -------- Sign Out  -----------
const signOut = function () {
  // console.log('In api.js')
  return $.ajax({
    url: config.apiUrl + '/sign-out',
    method: 'DELETE',
    headers: {
      Authorization: 'Token token=' + store.user.token
    }
  })
}


module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut
}
