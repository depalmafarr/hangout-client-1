'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
const hangEvents = require('./hangs/events.js')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)

  // for showing all hangs
  $('#show-hangs').on('click', hangEvents.onShowHangs)

  // for showing "my hangs"
  $('#show-my-hangs').on('click', hangEvents.onShowMyHangs)

  // for creating new hangs
  $('#addHang').on('submit', hangEvents.onNewHang)

  hangEvents.addHandlers()
})
