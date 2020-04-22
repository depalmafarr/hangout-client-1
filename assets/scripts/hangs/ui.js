'use strict'

const store = require('../store')
const showHangsTemplate = require('../templates/hang-listing.handlebars')

const onNewHangSuccess = function (data) {
  $('#message').show(800)
  $('#message').text('SUCCESS')
}

const showHangsSuccess = function (data) {
  console.log('showHangsSuccess has been called')
  const showHangsHtml = showHangsTemplate({ hangs: data.hangs })
  $('.content').html(showHangsHtml)

  if (data.hangs.length === 0) {
    console.log('no events yet')
  } else {
    console.log('here are all your events: ', data.hangs)
  }
}

const showHangsFailure = function (data) {
  console.log('showHangsFailure has been called')
}

const onDeleteHangfailure = function () {
  $('#message').show(800)
  $('#message').text('Failure to Delete Hang')
}


module.exports = {
  showHangsSuccess,
  showHangsFailure,
  onNewHangSuccess,
  onDeleteHangfailure
}
