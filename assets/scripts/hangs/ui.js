'use strict'

const store = require('../store')
const showHangsTemplate = require('../templates/hang-listing.handlebars')
const showMyHangsTemplate = require('../templates/my-hang-listing.handlebars')

const onNewHangSuccess = function (data) {
  $('#message').show(800)
  $('#message').text('SUCCESS')
  console.log('this is da data', data)
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
}
// ---------- RSVP -------------
const rsvpHangSuccess = function (data) {
  data.hang.rsvp.push(store.user._id)
  console.log('DATA From rsvpHangSuccess', data.hang.rsvp)
  console.log('heres the whole thing: ', data)
// console.log('USER', store.user._id)
}

const onShowMyHangsFailure = function (data) {
  console.log('ON SHOW MY HANGS FAILED, BRO')
}

const showRsvpSuccess = function (data) {
  console.log('in ui.js, showRsvpSuccess data is ', data)
  const hangsArray = data.hangs

  // loop through the array of hangs
  hangsArray.forEach((hang) => {
    console.log('hey, we are in a forEach ... hang', hang.rsvp)
    const rsvpArray = hang.rsvp
    // console.log('hang.rsvp is ', hang.rsvp)
    // run through each rsvp array
    // if the user ID is in the rsvp array, then show it to the user (handlebars)
    rsvpArray.forEach((rsvp) => {
      console.log('This is the loop inside the loop ', rsvp)
    })
  })
}

const showRsvpFailure = function (data) {
  console.log('in ui.js, data is showRsvpFailure ', data)
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
  onShowMyHangsFailure,
  rsvpHangSuccess,
  showRsvpSuccess,
  showRsvpFailure
}
