'use strict'

const store = require('../store')
const showHangsTemplate = require('../templates/hang-listing.handlebars')
const showMyHangsTemplate = require('../templates/my-hang-listing.handlebars')




// ---------- Creating a New Hang -------------
const onNewHangSuccess = function (data) {
  $('#message').show(800)
  $('#message').text('NEW HANG ADDED!')
    $('#message').hide(800)
      $('#addHang').closest('form').find('input[type=text], textarea').val('')
        $('#addHang').closest('form').find('input[type=date], textarea').val('')
  console.log('this is da data', data)
}

const onNewHangFailure = function () {
  $('#message').show(800)
  $('#message').text('FAILURE TO ADD NEW HANG!')
  $('#message').hide(2800)
}




// ---------- Showing All Hangs -------------
const showHangsSuccess = function (data) {
  console.log('showHangsSuccess has been called')
  const showHangsHtml = showHangsTemplate({ hangs: data.hangs })
  $('.content').html(showHangsHtml)
  $('#message').show(2800)
  $('#message').text('VIEWING ALL HANGS!')
  $('#message').hide(2800)
  if (data.hangs.length === 0) {
    console.log('no events yet')
  } else {
    console.log('here are all your events: ', data.hangs)
  }
}

const showHangsFailure = function (data) {
  console.log('showHangsFailure has been called')
  $('#message').show(2800)
  $('#message').text('THERE WAS AN ERROR!')
  $('#message').hide(2800)
}




// ---------- Showing My Hangs -------------
const onShowMyHangsSuccess = function (data) {
  // array of our hangs
  const hangsArray = data.hangs

  // loo through the array of hangs
  hangsArray.forEach((hang) => {
    console.log('store.user.id is', store.user._id)
    // check if current user owns it or not
    // log hang.owner and sotre.user.id to make sure these are the right values to compare
    if (hang.owner === store.user._id) {
      // if the current user owns it then add currentUserOwns true
      hang.currentUserOwns = true
    } else {
      // else add currentUserOwns false
      hang.currentUserOwns = false
    }
  })
  const showMyHangsHtml = showMyHangsTemplate({ hangs: data.hangs })
  $('.content').html(showMyHangsHtml)
  $('.content').show()
  $('#message').show(2800)
  $('#message').text('VIEW YOUR HANGS!')
  $('#message').hide(2800)
}

const onShowMyHangsFailure = function (data) {
  console.log('ON SHOW MY HANGS FAILED, BRO')
  $('#message').show(800)
  $('#message').text('Failure to Show Your Hangs')
  $('#message').hide(2800)
}




// ---------- Deleting a Hang -------------
const onDeleteHangSuccess = function () {
  $('#message').show(800)
  $('#message').text('Your Hang has been Deleted!')
  $('#message').hide(800)
}

const onDeleteHangfailure = function () {
  $('#message').show(800)
  $('#message').text('Failure to Delete Hang')
  $('#message').hide(800)
}




// ---------- Updating a Hang -------------
const onUpdateHangSuccess = function () {
  console.log('onUpdateSuccess has been called')
  $('#message').show(2800)
  $('#message').text('HANG UPDATED!')
  $('#message').hide(2800)
}

const onUpdateHangFailure = function () {
  console.log('onUpdateFailure has been called')
  $('#message').show(2800)
  $('#message').text('Failure to Update Hang!')
  $('#message').hide(2800)
}



// ---------- RSVP -------------
const rsvpHangSuccess = function (data) {
data.hang.rsvp.push(store.user._id)
console.log('DATA From rsvpHangSuccess', data.hang.rsvp)
// console.log('USER', store.user._id)
}

module.exports = {
  showHangsSuccess,
  showHangsFailure,
  onNewHangSuccess,
  onNewHangFailure,
  onDeleteHangSuccess,
  onDeleteHangfailure,
  onUpdateHangSuccess,
  onUpdateHangFailure,
  onShowMyHangsSuccess,
  onShowMyHangsFailure,
  rsvpHangSuccess
}
