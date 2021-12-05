'use strict'

const getFormFields = require('../../lib/get-form-fields')

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
  $('#post-feed').html('Post successfully added')
  console.log(responseData)
}

const onError = function (err) {
  // log the error for debugging purposes
  console.error(err)

  $('#user-display').html('Something went wrong, please try again.')

  $('#user-display').addClass('failure')

  setTimeout(() => {
    $('#user-display').html('')
    $('#user-display').removeClass('failure')
  }, 5000)

  // reset all forms
  $('form').trigger('reset')
}

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
  $('#post-feed').addClass('border')
  $('#post-feed').show()
}

const onUpdateSuccess = function (responseData) {
  $('#user-display').html('')
  $('#user-display').removeClass()
  $('#user-display').addClass('text-success')
  $('#user-display').text('Post updated successfully')
  setTimeout(() => {
    $('#user-display').empty()
  }, 5000)
  console.log('update was successful')
}

const onDestroySuccess = function () {
  $('#user-display').html('')
  $('#user-display').removeClass()
  $('#user-display').addClass('text-success')
  $('#user-display').text('Your post was deleted')
  setTimeout(() => {
    $('#user-display').empty()
  }, 5000)
  console.log('post was successfully deleted')
  $('#post-feed').hide()
}

module.exports = {
  onCreateSuccess,
  onError,
  onIndexSuccess,
  onUpdateSuccess,
  onDestroySuccess
}
