const store = require('../store')

const signUpSuccess = function (responseData) {
//   $('#movies-display').text('Signed up successfully!')

  //   // remove existing classes and then add a green text-success class from boostrap
  //   // we need to remove classes so it doesnt interfere with our bootstrap if a class has been determined before
  //   $('#movies-display').removeClass()
  //   $('#movies-display').addClass('text-success')

  //   // clear our the form field
  $('form').trigger('reset')
  console.log('responseData is', responseData)
}

const signUpFailure = function (error) {
//   $('#error-message').text('Sign up failed!')

  //   // remove existing classes and then add a green text-success class from boostrap
  //   $('#error-message').removeClass()
  //   $('#error-message').addClass('text-danger')

  //   // clear our the form field
  //   $('form').trigger('reset')
  console.log('error is', error)
}

const signInSuccess = function (responseData) {
  // we are going to add the user we got back in our response's data to the 'store' object. So we can access the user's token later in api.js

  console.log('sign in store is', store)
  store.user = responseData.user

  //   $('#movies-display').text('Signed in successfully!')
  //   setTimeout(() => {
  //     $('#movies-display').html('')

  //     $('#movies-display').removeClass()
  //     $('#movies-display').addClass('text-success')
  //   }, 5000)
  $('form').trigger('reset')
  //   // after we sign hide this section
  //   $('#before-sign-in').hide()
  //   // after we sign show this section
  //   $('#after-sign-in').show()

  console.log('sign in responseData is', responseData)
}

const signInFailure = function (error) {
//   $('#error-message').text('Sign In failed!')

  //   $('#error-message').removeClass()
  //   $('#error-message').addClass('text-danger')

  //   // clear our the form field
  //   $('form').trigger('reset')
  console.log('sign in error is', error)
}

const changePasswordSuccess = function (responseData) {
//   $('#movies-display').text('Changed password successfully!')

  //   $('#movies-display').removeClass()
  //   $('#movies-display').addClass('text-success')

  $('form').trigger('reset')
  console.log('change password responseData is', responseData)
}

const changePasswordFailure = function (error) {
//   $('#error-message').text('CHanging passwords failed!')

  //   $('#error-message').removeClass()
  //   $('#error-message').addClass('text-danger')

  //   $('form').trigger('reset')
  console.log('change pwd error is', error)
}

const signOutSuccess = function () {
//   $('#movies-display').text('Signed out successfully')

  //   $('#movies-display').removeClass()
  //   $('#movies-display').addClass('text-success')

  //   $('form').trigger('reset')

  //   // stop keeping track of the signed in user
  //   store.user = null

  //   // clear (reset) the forms on the page
  //   $('form').trigger('reset')

  //   // Hide the "after sign in" elements
  //   $('#after-sign-in').hide()
  //   // Display the "before sign in" elements
  //   $('#before-sign-in').show()

  console.log('signOutSuccess ran and nothing was returned!')
}

const signOutFailure = function (error) {
//   $('#error-message').text('Signing out failed!')

  //   $('#error-message').removeClass()
  //   $('#error-message').addClass('text-danger')

  //   $('form').trigger('reset')
  console.log('error is', error)
}

// const postTripSuccess = function (responseData) {
//   console.log('responseData is', responseData)
//   $('#post-feed'.html)
// }

// const postTripFailure = function (error) {
//   console.log('error is', error)
// }

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordSuccess,
  changePasswordFailure,
  signOutSuccess,
  signOutFailure
}
