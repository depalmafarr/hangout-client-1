'use strict'

const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../../lib/get-form-fields')

// -------- create onAddHang function -----------
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

const onShowHangs = function (event) {
  event.preventDefault()
  // console.log('In events.js: onShowDays function has been called and ran')
  api.showHangs()
    .then(ui.showHangsSuccess)
    .catch(ui.showHangsFailure)
}

const onShowMyHangs = function (event) {
  event.preventDefault()
  // console.log('In events.js: onShowDays function has been called and ran')
  api.showMyHangs()
    .then(ui.onShowMyHangsSuccess)
    .catch(ui.onShowMyHangsFailure)
}

const onDeleteHang = function (event) {
  console.log(event.target)
  const id = $(event.target).data('id')
  // console.log("WHO CARES!", id)
  api.deleteHang(id)
    .then(function () {
      onShowHangs(event)
    })
    .catch(ui.onDeleteHangfailure)
}

const onUpdateHang = function (event) {
  event.preventDefault()
  // const data = store.day
  const id = $(event.target).data('id')
  const data = getFormFields(event.target)
  console.log('in events.js, data is ', data)
  console.log('in events.js, id is ', id)
  api.updateHang(data, id)
    .then(function () {
      onShowHangs(event)
    },
    ui.updateHangSuccess)
    .catch(ui.updateHangFailure)
}

const onRsvp = function (event) {
  event.preventDefault()
  // const data = store.day
  const data = $(event.target).data()
  console.log(data)
  const id = $(event.target).data('id')
  console.log('ID is', id)
  // summon get function to get all the data
  console.log('onRSVP data is', data)
  api.rsvpHang(data, id)
    .then(ui.rsvpHangSuccess)
    .catch(ui.rsvpHangFailure)
}

const onShowRsvp = function (event) {
  event.preventDefault()
  api.showRsvp()
    .then(ui.showRsvpSuccess)
    .catch(ui.showRsvpFailure)
}

const addHandlers = () => {
  $('#show-hangs').on('submit', onShowHangs)
  // $('#clearHangsButton').on('click', onClearMovies)
  $('.content').on('click', '.btn-danger', onDeleteHang)
  $('.content').on('click', '.btn-rsvp', onRsvp)
  $('.content').on('submit', '#updateButton', onUpdateHang)
  $('#show-my-rsvp').on('click', onShowRsvp)
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
