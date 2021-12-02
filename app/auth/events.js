const getFormFields = require('../../lib/get-form-fields')

const api = require('./api')

const ui = require('./ui')

const onSignUp = function (event) {
  // prevent the default action of refreshing the page
  event.preventDefault()
  // event.target is the actual form'data inputted that caused the submit event
  const form = event.target
  // get the data from our form element
  const formData = getFormFields(form)

  api
    .signUp(formData)
  // if our sign up request is successful run the signUpSuccess function
    .then(ui.signUpSuccess)
  // otherwise, if error occur run signUpFailure function
    .catch(ui.signUpFailure)
}

const onSignIn = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api.signIn(formData).then(ui.signInSuccess).catch(ui.signInFailure)
}
// PATCH request / change-password , pass it the old and new password

const onChangePassword = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)
  api
    .changePassword(formData)
    .then(ui.changePasswordSuccess)
    .catch(ui.changePasswordFailure)
}

const onSignOut = function () {
  api
    .signOut()
  // no need to pass in arguments here only token
  // if our sign up request is successful run the signUpSuccess function
    .then(ui.signOutSuccess)
  // otherwise, if error occur run signUpFailure function
    .catch(ui.signOutFailure)
}

// const onPostSubmit = function (event) {
//   event.preventDefault()
//   const form = event.target
//   const formData = getFormFields(form)
//   api
//     .postTrip(formData)
//     .then(ui.postTripSuccess)
//     .catch(ui.postTripFailure)
// }


module.exports = {
  onSignUp,
  onSignIn,
  onChangePassword,
  onSignOut
}
