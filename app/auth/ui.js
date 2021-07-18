'use strict'

const store = require('../store')

const onSignUpSuccess = function (response) {
  console.log('in then')
  console.log(response)
  $('#message').text(`Great Success! You signed up with the email ${response.user.email}`)
  $('#message').show()
  $('#sign-up').hide()
  $('#sign-in').show()
}
const onSignInSuccess = function (response) {
  console.log('in then')
  store.user = response.user
  $('#message').text('Great Success! You are now signed in.')
  $('#message').show()
  $('#sign-in').hide()
  $('#signUpButton').hide()
  $('#signInButton').hide()
  $('#signOutButton').show()
  $('#newGameButton').show()
}

const onSignOutSuccess = function () {
  console.log('in then')
  $('#message').text('Great Success! You are now signed out')
  $('#signOutButton').hide()
  $('#signUpButton').show()
  $('#signInButton').show()
  $('#game-board').hide()
  $('#newGameButton').hide()
  $('#message').hide(3000)
}

const onFailure = function () {
  console.log('in catch')
  $('#message').text('TRY AND TRY AGAIN!')
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onSignOutSuccess,
  onFailure

}
