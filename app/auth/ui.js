const store = require('../store')

const signUpSuccess = function (responseData) {
  $('#login-display').removeClass()
  $('#login-display').addClass('text-success')
  $('#login-display').text('Signed up successfully!')
  setTimeout(() => {
    $('#login-display').empty()
  }, 5000)

  $('form').trigger('reset')
  console.log('responseData is', responseData)
}

const signUpFailure = function (error) {
  $('#login-display').text('The credentials you entered are incorrect. Check your email or password and try again')

  $('#login-display').removeClass()
  $('#login-display').addClass('text-danger')
  setTimeout(() => {
    $('#login-display').empty()
  }, 5000)
  // clear our the form field
  $('form').trigger('reset')

  console.log('error is', error)
}

const signInSuccess = function (responseData) {
  $('.before-sign-in').hide()

  console.log('sign in store is', store)
  store.user = responseData.user
  $('form').trigger('reset')

  $('#user-display').html('')
  $('#user-display').removeClass()
  $('#user-display').addClass('text-success')
  $('#user-display').text('Signed in successfully!')

  setTimeout(() => {
    $('#user-display').empty()
  }, 5000)

  $('.after-sign-in').show()

  $('.after-sign-in button').addClass('btn btn-primary btn-sm')

  console.log('sign in responseData is', responseData)
}

const signInFailure = function (error) {
  $('#login-display').text('The credentials you entered are incorrect. Check your email and password and try again')

  $('#login-display').removeClass()
  $('#login-display').addClass('text-danger')
  setTimeout(() => {
    $('#login-display').empty()
  }, 2000)
  // clear our the form field
  $('form').trigger('reset')
  console.log('sign in error is', error)
}

const changePasswordSuccess = function (responseData) {
  $('#user-display').text('Changed password successfully')
  setTimeout(() => {
    $('#user-display').empty()
  }, 2000)
  $('#user-display').removeClass()
  $('#user-display').addClass('text-success')

  $('form').trigger('reset')
  console.log('change password responseData is', responseData)
}

const changePasswordFailure = function (error) {
  console.log('change pwd error is', error)
}

const signOutSuccess = function () {
  $('#user-display').text('Signed out successfully')
  $('#user-display').removeClass()
  $('#user-display').addClass('text-success')
  setTimeout(() => {
    $('#user-display').empty()
  }, 5000)
  $('form').trigger('reset')
  store.user = null

  $('.after-sign-in').hide()
  $('.before-sign-in').show()

  console.log('signOutSuccess ran and nothing was returned!')
}

const signOutFailure = function (error) {
  $('#user-display').text('Signing out failed. Please try again')

  $('#user-display').removeClass()
  $('#user-display').addClass('text-danger')

  $('form').trigger('reset')
  console.log('error is', error)
}

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
