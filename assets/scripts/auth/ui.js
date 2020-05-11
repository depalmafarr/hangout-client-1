'use strict'

const store = require('../store')

// -------- Sign Up  -----------
const onSignUpSucess = function (data) {
  // console.log('onSignUpSucess data is: ', data)
  $('#message').show(800)
  $('#message').text('SIGNED UP!')
  $('#message').hide(800)
  $('#sign-up').closest('form').find('input[type=text], textarea').val('')
  $('#sign-up').closest('form').find('input[type=password], textarea').val('')
}

const onSignUpFailure = function () {
  $('#message').show(800)
  $('#message').text('Sign Up Error!')
  $('#message').hide(800)
  // console.log('onSignUpFailure data is: ')
  $('#sign-up').closest('form').find('input[type=text], textarea').val('')
  $('#sign-up').closest('form').find('input[type=password], textarea').val('')
}

// -------- Sign In -----------
const onSignInSucess = function (data) {
  // console.log('onSignInSucess data is: ', data)
  $('#message').fadeIn(800)
  $('#message').text('SIGNED IN!')
  $('#message').fadeOut(800)
  $('#sign-in').closest('form').find('input[type=text], textarea').val('')
  $('#sign-in').closest('form').find('input[type=password], textarea').val('')
  store.user = data.user
  $('.sign-up').hide()
  $('.sign-in').hide()
  $('#change-password').show()
  $('#sign-out').show()
  $('#show-my-hangs').show()
  $('#addHang').show()
  $('#rsvp-hangs').show()
  $('#show-hangs').show()
  $('#show-upcoming-hangs').hide()
}

const onSignInFailure = function () {
  $('#message').show(800)
  $('#message').text('Sign In Error!')
  $('#message').hide(800)
  // console.log('onSignInFailure data is: ')
  $('#sign-in').closest('form').find('input[type=text], textarea').val('')
  $('#sign-in').closest('form').find('input[type=password], textarea').val('')
}

// -------- Change Password -----------
const onChangePasswordSuccess = function (data) {
  $('#message').show(800)
  $('#message').text('PASSWORD CHANGED!')
  $('#message').hide(800)
  // console.log('onChangePasswordSuccess data is: ', data)
  $('#change-password2').trigger('reset')
  // $('#change-password').closest('form').find('input[type=password], textarea').val('')
  // $('#change-password').closest('form').find('input[type=password], textarea').val('')
}

const onChangePasswordFailure = function () {
  $('#message').show(800)
  $('#message').text('Password Change Error!')
  $('#message').show(800)
  // console.log('onChangePasswordFailure data is: ')
  $('#change-password2').trigger('reset')
  // $('#change-password').closest('form').find('input[type=password], textarea').val('')
  // $('#change-password').closest('form').find('input[type=password], textarea').val('')
}

// -------- Sign Out -----------
const onSignOutSuccess = function (data) {
  // console.log('onSignOutSuccess data is: ', data)
  $('#message').show(3300)
  $('#message').text('SIGNED OUT!')
  $('#message').hide(3300)
  $('.sign-up').show()
  $('.sign-in').show()
  $('#change-password').hide()
  $('#show-my-hangs').hide()
  $('#addHang').hide()
  $('.content').hide()
  $('#rsvp-hangs').hide()
  $('#sign-out').hide()
  $('#show-hangs').hide()
  $('#show-upcoming-hangs').show()
}

const onSignOutFailure = function () {
  // console.log('onSignOutFailure data is: ')
  $('#message').show(800)
  $('#message').text('Sign Out Error!')
  $('#message').hide(800)
  $('#sign-out').closest('form').find('input[type=text], textarea').val('')
  $('#sign-out').closest('form').find('input[type=password], textarea').val('')
}

module.exports = {
  onSignUpSucess,
  onSignUpFailure,
  onSignInSucess,
  onSignInFailure,
  onChangePasswordSuccess,
  onChangePasswordFailure,
  onSignOutSuccess,
  onSignOutFailure
}
