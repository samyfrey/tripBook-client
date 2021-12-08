'use strict'

const onCreateSuccess = function (responseData) {
  $('form').trigger('reset')
  console.log('post successfully created')
  $('#post-feed').html('')
  $('#post-feed').removeClass()
  $('#post-feed').addClass('text-success')
  $('#post-feed').html('Post successfully added')

  console.log(responseData)
}

const onError = function (err) {
  console.error(err)

  $('form').trigger('reset')
}

const onIndexSuccess = function (responseData) {
  $('#post-feed').html('')
  $('#post-feed').removeClass()
  const trips = responseData.trip
  console.log(responseData)
  let tripsHtml = ''
  trips.forEach((trip) => {
    tripsHtml += `
    <form class="post-update-dynamic" data-id=${trip._id}>
      <h4 class="post-title">${trip.title}</h4>
      <textarea name="trip[text]" type="text" class="post-text">${trip.text}</textarea>
      <div class="index-btn">
      <button class="btn btn-success btn-sm" type="submit">Save changes</button>
      </form>
      <button class='post-destroy-dynamic btn btn-secondary btn-sm' data-id=${trip._id}>Delete trip</button>
      </div>
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
  $('#post-feed').empty()
  $('#post-feed').html('')
  $('#user-display').removeClass()
  $('#user-display').addClass('text-success')
  $('#user-display').text('Your post was deleted')
  setTimeout(() => {
    $('#user-display').empty()
  }, 5000)
  console.log('post was successfully deleted')
}

module.exports = {
  onCreateSuccess,
  onError,
  onIndexSuccess,
  onUpdateSuccess,
  onDestroySuccess
}
