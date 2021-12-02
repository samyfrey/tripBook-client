'use strict'

const getFormFields = require('../../lib/get-form-fields')

// const tripsApi = require('./api.js')
// const tripsUi = require('./ui.js')
// const getFormFields = require('../../../lib/get-form-fields')

const onCreateSuccess = function (responseData) {
  // add success message to content
//   $('#books-create-message').html('You created a new book!')

  //   // we just created a new book!
  //   // we can add a message to let the users know they should request all of
  //   // the books again to see the newly created book included
  //   $('#books-display').html(
  //     'Books have changed! Click "Get All Books" again to see all the books.'
  //   )

  //   // add class for success messaging
  //   $('#books-create-message').addClass('success')

  //   // use setTimeout to allow the success message to stay for 5 seconds before
  //   // the message is replaced with '' and the 'success' class is removed
  //   setTimeout(() => {
  //     $('#books-create-message').html('')
  //     $('#books-create-message').removeClass('success')
  //   }, 5000)

  // reset all forms
  $('form').trigger('reset')
  console.log('post successfully created')
  $('#post-feed').html('THis is where the post created will go')
  console.log(responseData)
}

const onError = function (err) {
  // log the error for debugging purposes
  console.error(err)

  //   // display a message to the user to let them know what they were doing did
  //   // not work correctly
  //   $('#error-message').html('Something went wrong, please try again.')

  //   // add class for error messaging
  //   $('#error-message').addClass('failure')

  //   // use setTimeout to allow the error message to stay for 5 seconds before
  //   // the message is replaced with '' and the 'failure' class is removed
  //   setTimeout(() => {
  //     $('#error-message').html('')
  //     $('#error-message').removeClass('failure')
  //   }, 5000)

  // reset all forms
  $('form').trigger('reset')
}

// const onGetTrip = function (event) {
//   event.preventDefault()
//   const data = getFormFields(event.target)
//   const trip = data.trip
//   if (trip.id.length !== 0) {
//     tripsApi.show(trip.id).then(tripsUi.onSuccess).catch(tripsUi.onError)
//   } else {
//     console.log('Please provide a trip id!')
//   }
// }

const onIndexSuccess = function (responseData) {
  const trips = responseData.trip
  console.log(responseData)
  let tripsHtml = ''
  trips.forEach((trip) => {
    tripsHtml += `
    <form class="post-update-dynamic" data-id=${trip._id}>
      <h4 class="post-title">${trip.title}</h4>
      <textarea name="trip[text]" type="text" class="post-text">${trip.text}</textarea>
      <button type="submit">Save changes</button>
      </form>
      <button class='post-destroy-dynamic' data-id=${trip._id}>Delete trip</button>
      <br>
    `
  })
  $('#post-feed').html(tripsHtml)
}

const onUpdateSuccess = function (responseData) {
  console.log('update was successful')
}

const onDestroySuccess = function () {
  // $('#books-destroy-message').html('Book successfully deleted!')
  $('form').trigger('reset')
  console.log('post was successfully deleted')
}
// <input type="text" name="trip[title]" placeholder="trip Title Here" required>
// <input type="text" name="trip[author]" placeholder="trip Author Here" required>
// to include if ID needed <p>ID: ${trip._id}</p>
// set the html for all of our trips all at once

module.exports = {
  onCreateSuccess,
  onError,
  onIndexSuccess,
  onUpdateSuccess,
  onDestroySuccess
}
