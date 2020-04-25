'use strict'

const store = require('../store')


// -------- Sign Up  -----------
const onSignUpSucess = function (data) {
  // $('#message').text('Successful sign up!')
  // $('#message').removeClass()
  // $('#signInMessage').text('')
  // $('#sign-up').trigger('reset')
  // $('#sign-up')[0].reset()
  console.log('onSignUpSucess data is: ', data)
  $('#message').show(2800)
  $('#message').text('SIGNED UP!')
  $('#message').hide(2800)
  $('#sign-up').closest('form').find('input[type=text], textarea').val('')
  $('#sign-up').closest('form').find('input[type=password], textarea').val('')
}

const onSignUpFailure = function () {
  // $('#message').text('Did not sign up')
  // $('#message').removeClass()
  // $('#message').addClass('failure')
  // $('#sign-up').trigger('reset')
  // $('#signInMessage').text('')
  $('#message').show(2800)
  $('#message').text('Sign Up Error!')
  $('#message').show(2800)
  console.log('onSignUpFailure data is: ')
  $('#sign-up').closest('form').find('input[type=text], textarea').val('')
  $('#sign-up').closest('form').find('input[type=password], textarea').val('')
}



// -------- Sign In -----------
const onSignInSucess = function (data) {
  // $('#signInMessage').text('Successful sign in')
  // $('#signInMessage').removeClass()
  // $('.sign-in').addClass('hidden')
  // $('.sign-up').addClass('hidden')
  // $('.change-password').removeClass('hidden')
  // $('#sign-out').removeClass('hidden')
  // $('#signUpMessage').text('')
  // $('#message').text('')
  // $('#sign-in').trigger('reset')
  console.log('onSignInSucess data is: ', data)
  $('#message').show(2800)
  $('#message').text('SIGNED IN!')
  $('#message').hide(2800)
  $('#sign-in').closest('form').find('input[type=text], textarea').val('')
  $('#sign-in').closest('form').find('input[type=password], textarea').val('')
  store.user = data.user
  $('.sign-up').hide()
  $('.sign-in').hide()
  $('#change-password').show()
  $('#sign-out').show()
  $('#show-my-hangs').show()
  $('#addHang').show()
}

const onSignInFailure = function () {
  // $('#sign-in').trigger('reset')
  // $('#signInMessage').text('Wrong password or email')
  // $('#signInMessage').removeClass()
  // $('#signInMessage').addClass('failure')
  // $('#message').text('')
  $('#message').show(2800)
  $('#message').text('Sign In Error!')
  $('#message').hide(2800)
  console.log('onSignInFailure data is: ')
  $('#sign-in').closest('form').find('input[type=text], textarea').val('')
  $('#sign-in').closest('form').find('input[type=password], textarea').val('')
}



// -------- Change Password -----------
const onChangePasswordSuccess = function (data) {
  // $('#change-password').trigger('reset')
  // $('#passwordChangeMessage').text('You changed your password!')
  // $('#passwordChangeMessage').removeClass()
  // $('#signInMessage').text('')
  $('#message').show(2800)
  $('#message').text('PASSWORD CHANGED!')
  $('#message').hide(2800)
  console.log('onChangePasswordSuccess data is: ', data)
  $('#change-password').closest('form').find('input[type=text], textarea').val('')
    $('#change-password').closest('form').find('input[type=password], textarea').val('')
}

const onChangePasswordFailure = function () {
  // $('#change-password').trigger('reset')
  // $('#passwordChangeMessage').text('You did not change your password')
  // $('#passwordChangeMessage').removeClass()
  // $('#passwordChangeMessage').addClass('failure')
  // $('#signInMessage').text('')
  $('#message').show(2800)
  $('#message').text('Password Change Error!')
  $('#message').show(2800)
  console.log('onChangePasswordFailure data is: ')
  $('#change-password').closest('form').find('input[type=text], textarea').val('')
    $('#change-password').closest('form').find('input[type=password], textarea').val('')
}



// -------- Sign Out -----------
const onSignOutSuccess = function (data) {
  // $('#sign-out').trigger('reset')
  // $('#signInMessage').text('You signed out')
  // $('.signInMessage').removeClass()
  // $('.sign-in').removeClass('hidden')
  // $('.sign-up').removeClass('hidden')
  // $('.change-password').addClass('hidden')
  // $('#sign-out').addClass('hidden')
  // $('.container').addClass('hidden')
  // $('#passwordChangeMessage').text('')
  // $('.content').empty()
  console.log('onSignOutSuccess data is: ', data)
  $('#message').show(3300)
  $('#message').text('SIGNED OUT!')
  $('#message').hide(3300)
  $('.sign-up').show()
  $('.sign-in').show()
  $('#change-password').hide()
  $('.sign-out').hide()
  $('#show-my-hangs').hide()
  $('#addHang').hide()
  $('.content').hide()
}

const onSignOutFailure = function () {
  // $('#sign-out').trigger('reset')
  // $('#signOutMessage').text('Sign out failed')
  // $('#signOutMessage').removeClass()
  // $('#signOutMessage').addClass('failure')
  // $('#signInMessage').text('')
  // $('#passwordChangeMessage').text('')
  console.log('onSignOutFailure data is: ')
  $('#message').show(2800)
  $('#message').text('Sign Out Error!')
  $('#message').show(2800)
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
