'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const authEvents = require('./auth/events.js')
const hangEvents = require('./hangs/events.js')

// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // User events set-up
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('submit', authEvents.onSignOut)

  // User event displays
  $('#change-password').hide()
  $('#sign-out').hide()
  // $('#sign-up').show()
  // $('#sign-in').show()


  // for showing all hangs
  $('#show-hangs').on('click', hangEvents.onShowHangs)
  $('#updatebutton').hide()
  $('#sign-out').hide()
  $('#rsvp').hide()
  $('#delete-hang').hide()
  $('#addHang').hide()
  $('#show-hangs').hide()



  // for showing "my hangs"
  $('#show-my-hangs').on('click', hangEvents.onShowMyHangs)
  $('#show-my-hangs').hide()

  // showing upcoming hangs_
  $('#show-upcoming-hangs').on('click', hangEvents.onShowUpcomingHangs)

  // for creating new hangs
  $('#addHang').on('submit', hangEvents.onNewHang)

  // Display RSVP
  $('#rsvp-hangs').on('click', hangEvents.onShowRsvp)
  $('#rsvp-hangs').hide()
  // $('#rsvp').hide()


  hangEvents.addHandlers()
})
