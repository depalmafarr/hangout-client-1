
// require

const showHangsSuccess = function (data) {
  console.log('showHangsSuccess has been called')
  if (data.hangs.length === 0) {
    console.log('no events yet')
  } else {
    console.log('here are all your events: ', data.hangs)
  }
}

const showHangsFailure = function (data) {
  console.log('showHangsFailure has been called')
}

module.exports = {
  showHangsSuccess,
  showHangsFailure
}
