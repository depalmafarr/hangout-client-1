'use strict'

const store = require('../store')
const showHangsTemplate = require('../templates/hang-listing.handlebars')
const showMyHangsTemplate = require('../templates/my-hang-listing.handlebars')
const rsvpTemplate = require('../templates/rsvp-listing.handlebars')




// ---------- Creating a New Hang -------------
const onNewHangSuccess = function (data) {
  $('#message').show(800)
  $('#message').text('NEW HANG ADDED!')
    $('#message').hide(800)
      $('#addHang').closest('form').find('input[type=text], textarea').val('')
        $('#addHang').closest('form').find('input[type=date], textarea').val('')

}

const onNewHangFailure = function () {
  $('#message').show(800)
  $('#message').text('FAILURE TO ADD NEW HANG!')
  $('#message').hide(800)
}




// ---------- Showing All Hangs -------------
const showHangsSuccess = function (data) {

  const showHangsHtml = showHangsTemplate({ hangs: data.hangs })
  $('.content').html(showHangsHtml)
  $('#message').show(800)
  $('#message').text('VIEWING ALL HANGS!')
  $('#message').hide(800)
  $('.content').show()
  if (data.hangs.length === 0) {
    console.log('no events yet')
  } else {
    console.log('here are all your events: ', data.hangs)
  }
}

const showHangsFailure = function (data) {

  $('#message').show(800)
  $('#message').text('THERE WAS AN ERROR!')
  $('#message').hide(800)
}




// ---------- Showing My Hangs -------------
const onShowMyHangsSuccess = function (data) {
  // array of our hangs
  const hangsArray = data.hangs

  // loop through the array of hangs
  hangsArray.forEach((hang) => {
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
  $('#message').show(800)
  $('#message').text('VIEW YOUR HANGS!')
  $('#message').hide(800)
}

const onShowMyHangsFailure = function (data) {

  $('#message').show(800)
  $('#message').text('Failure to Show Your Hangs')
}


// -------- Showing RSVP ------

const onShowRsvp = function (data) {
  // array of our hangs
  const rsvpArray = data.hangs
console.log('in RSVP array', rsvpArray)
  // loop through the array of hangs
  rsvpArray.forEach((hang) => {
    // check if current user owns it or not
    // log hang.owner and sotre.user.id to make sure these are the right values to compare
    hang.rsvp.forEach((rsvp) => {


    console.log('ANYTHING1', rsvp)
    if (store.user.email === rsvp.rsvp) {
      // if the current user owns it then add currentUserOwns true
      console.log('ANYTHING2', rsvp.rsvp)
      hang.isGoing = true
    } else {
      // else add currentUserOwns false
      rsvp.isGoing = false

    }
  })
})
  const showRsvp = rsvpTemplate ({ hangs: data.hangs })
  $('.content').html(showRsvp)

  $('.content').show()
  $('#message').show(800)
  $('#message').text('VIEW YOUR HANGS!')
  $('#message').hide(800)
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

  $('#message').show(800)
  $('#message').text('HANG UPDATED!')
  $('#message').hide(800)
}

const onUpdateHangFailure = function () {
  $('#message').show(800)
  $('#message').text('Failure to Update Hang!')
  $('#message').hide(800)
}



// ---------- RSVP -------------
const rsvpHangSuccess = function (data) {
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
  rsvpHangSuccess,
  onShowRsvp
}
