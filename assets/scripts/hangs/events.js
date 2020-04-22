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

const onDeleteHang = function (event) {
  console.log(event.target)
  const id = $(event.target).data('id')
  console.log("WHO CARES!", id)
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

const addHandlers = () => {
  $('#show-hangs').on('submit', onShowHangs)
  // $('#clearHangsButton').on('click', onClearMovies)
  $('.content').on('click', '.btn-danger', onDeleteHang)
  $('.content').on('submit', '#updateButton', onUpdateHang)
}

module.exports = {
  onShowHangs,
  onNewHang,
  addHandlers,
  onDeleteHang,
  onUpdateHang
}
