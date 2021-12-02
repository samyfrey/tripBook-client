const api = require('./api.js')
const ui = require('./ui.js')
const getFormFields = require('../../lib/get-form-fields.js')

const onCreatePost = function (event) {
  // prevent default submit action to stop the page from refreshing
  event.preventDefault()

  // create a javascript object from the form (event.target) where the user entered the book
  // information
  const formData = getFormFields(event.target)
  console.log(formData)
  // make API call to create one book with the data we grabbed from the form
  api
    .create(formData)

  // if the API call is successful then invoke the onCreateSuccess function
    .then(ui.onCreateSuccess)

  // if the API call fails then run our onError function
    .catch(ui.onError)
}

const onPostIndex = function () {
  // make API call to get all of the books
  api.index()

  // if API call is successful then pass the data to the onIndexSuccess function
    .then(ui.onIndexSuccess)

  // if API call fails then run our onError function
    .catch(ui.onError)
}
const onDynamicUpdatePost = function (event) {
  event.preventDefault()
  const updateForm = event.target
  console.log(event)
  const id = $(updateForm).data('id')
  const formData = getFormFields(event.target)
  console.log(formData)
  api.update(id, formData)
    .then(ui.onUpdateSuccess)
    .catch(ui.onError)
}

const onDynamicDestroyPost = function (event) {
  const deleteButton = event.target
  const id = $(deleteButton).data('id')
  api.destroy(id)
    .then(ui.onDestroySuccess)
    .catch(ui.onError)
}

module.exports = {
  onCreatePost,
  onPostIndex,
  onDynamicUpdatePost,
  onDynamicDestroyPost
}
