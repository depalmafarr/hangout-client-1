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

const onShowMyHangsSuccess = function (data) {
  console.log('ON SHOW MY SUCCESS has been called AND IT WORKED')
  console.log('data.hangs.owner is: ', data.hangs)
  // loop through each event's owner and if it matches the current signed in user, display it
  const hangsArray = data.hangs
  console.log('hangsArray is ', hangsArray)
  // how do we make an array containing the value of
  const myHangs = hangsArray.filter(data.hangs)
  console.log('myHangs is: ', myHangs)
  // if store.user === data.hangs.owner
  // return
  // make new array of matching hangs
  // console.log('myHangs is: ', myHangs)
  // filteredHangs = matched hangs
  // pass filteredHangs through showHangsTemplate
  const showHangsHtml = showHangsTemplate({ hangs: data.hangs })
  $('.content').html(showHangsHtml)
}

const onShowMyHangsFailure = function (data) {
  console.log('ON SHOW MY HANGS FAILED, BRO')
}

const onDeleteHangfailure = function () {
  $('#message').show(800)
  $('#message').text('Failure to Delete Hang')
}

const onUpdateHangSuccess = function () {
  console.log('onUpdateSuccess has been called')
}

module.exports = {
  showHangsSuccess,
  showHangsFailure,
  onNewHangSuccess,
  onDeleteHangfailure,
  onUpdateHangSuccess,
  onShowMyHangsSuccess,
  onShowMyHangsFailure
}
