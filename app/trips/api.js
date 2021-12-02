const config = require('../config.js')
const store = require('../store')

const create = function (formData) {
  return $.ajax({
    url: config.apiUrl + '/trips',
    method: 'POST',
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const index = function () {
  return $.ajax({
    url: config.apiUrl + '/trips',
    method: 'GET'
  })
}

const update = function (id, formData) {
  console.log(formData)
  return $.ajax({
    url: config.apiUrl + '/trips/' + id,
    method: 'PATCH',
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const destroy = function (id) {
  return $.ajax({
    url: config.apiUrl + '/trips/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  create,
  index,
  update,
  destroy
}
