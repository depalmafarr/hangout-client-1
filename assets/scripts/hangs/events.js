'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')
const store = require('../store')


// -------- Creating a Hang function -----------
const onNewHang = function (event) {
  event.preventDefault()
  // console.log('on add movie')
  const data = getFormFields(event.target)
  api.newHang(data)
    .then(ui.onNewHangSuccess)

    .then(function () {
      onShowHangs(event)
    })
    .catch(ui.onNewHangFailure)
}



 // -------- Show All Hangs function -----------
const onShowHangs = function (event) {
  event.preventDefault()
  // console.log('In events.js: onShowDays function has been called and ran')
  api.showHangs()
    .then(ui.showHangsSuccess)
    .catch(ui.showHangsFailure)
}



 // -------- Show My Hangs function -----------
const onShowMyHangs = function (event) {
  event.preventDefault()
  // console.log('In events.js: onShowDays function has been called and ran')
  api.showMyHangs()
    .then(ui.onShowMyHangsSuccess)
    .catch(ui.onShowMyHangsFailure)
}



 // -------- Delete a Hang function -----------
const onDeleteHang = function (event) {
  // console.log(event.target)
  const id = $(event.target).data('id')
  // console.log("WHO CARES!", id)
  api.deleteHang(id)
    .then(function () {
      onShowMyHangs(event)
    })
    .catch(ui.onDeleteHangfailure)
}



 // -------- Update a Hang function -----------
const onUpdateHang = function (event) {
  event.preventDefault()
  // const data = store.day
  const id = $(event.target).data('id')
  const data = getFormFields(event.target)
  api.updateHang(data, id)
    .then(function () {
      onShowHangs(event)
    },
    ui.updateHangSuccess)
    .catch(ui.updateHangFailure)
}



 // -------- RSVP to a Hang function -----------
const onRsvp = function (event) {
  event.preventDefault()
  // console.log('store.user.email', store.user)
  if (store.user === undefined) {
    return ui.rsvpHangFailure()
  } else {
    const email = store.user.email
    const id = $(event.target).data('id')
    api.rsvpHang(id, email)
      .then(ui.rsvpHangSuccess)
      .catch(ui.rsvpHangFailure)
  }

}


//------- SHOW RSVP  ----
const onShowRsvp = function (event) {
  event.preventDefault()
  // console.log('In events.js: onShowDays function has been called and ran')
  api.showMyHangs()
    .then(ui.onShowRsvp)
    .catch(ui.rsvpHangFailure)


}



 // -------- Handlebar Buttons -----------
const addHandlers = () => {
  $('#show-hangs').on('submit', onShowHangs)
  // $('#clearHangsButton').on('click', onClearMovies)
  $('.content').on('click', '.btn-danger', onDeleteHang)
  $('.content').on('click', '.btn-rsvp', onRsvp)
  $('.content').on('submit', '#updateButton', onUpdateHang)
  // $('.content').on('submit', '#rsvp-hangs', onUpdateHang)
  // $('#rsvp-hangs').hide()

}


module.exports = {
  onShowHangs,
  onNewHang,
  addHandlers,
  onDeleteHang,
  onUpdateHang,
  onShowMyHangs,
  onRsvp,
  onShowRsvp
}
