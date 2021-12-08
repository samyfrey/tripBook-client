const config = require('../config')
const store = require('../store')

const signUp = function (formData) {
  return $.ajax({
    url: `${config.apiUrl}/sign-up`,
    method: 'POST',
    data: formData
  })
}

const signIn = function (formData) {
  return $.ajax({
    url: `${config.apiUrl}/sign-in`,
    method: 'POST',
    data: formData
  })
}

const changePassword = function (formData) {
  // make a request to PATCH/change-password
  return $.ajax({
    url: `${config.apiUrl}/change-password`,
    method: 'PATCH',
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const signOut = function () {
  // make a request to DELETE
  return $.ajax({
    url: `${config.apiUrl}/sign-out`,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const postTrip = function (formData) {
  return $.ajax({
    url: `${config.apiUrl}/trips`,
    method: 'POST',
    data: formData
  })
}

module.exports = {
  signUp,
  signIn,
  changePassword,
  signOut,
  postTrip
}
