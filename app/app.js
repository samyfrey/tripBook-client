const authEvents = require('./auth/events')
const uiNav = require('./auth/ui')
const tripEvents = require('./trips/events')
$(() => {
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#change-password').on('submit', authEvents.onChangePassword)
  $('#sign-out').on('click', authEvents.onSignOut)
  // $('#post-form').on('submit', authEvents.onPostSubmit)
  $('#post-create').on('submit', tripEvents.onCreatePost)
  $('#post-index').on('click', tripEvents.onPostIndex)
  $('#post-feed').on('submit', '.post-update-dynamic', tripEvents.onDynamicUpdatePost)
  $('#post-feed').on('click', '.post-destroy-dynamic', tripEvents.onDynamicDestroyPost)
})
