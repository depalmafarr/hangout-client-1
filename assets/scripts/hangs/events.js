'use strict'


const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields= require('../../../lib/get-form-fields')

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

module.exports = {
  onShowHangs, 
  onNewHang

}
