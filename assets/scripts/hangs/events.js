'use strict'

// require necessary files

const api = require('./api.js')

const ui = require('./ui.js')

const onShowHangs = function (event) {
  event.preventDefault()
  // console.log('In events.js: onShowDays function has been called and ran')
  api.showHangs()
    .then(ui.showHangsSuccess)
    .catch(ui.showHangsFailure)
}

module.exports = {
  onShowHangs
}
