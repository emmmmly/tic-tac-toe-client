'use strict'

const store = require('../store')
// TO DO: write a function to handle the various shows and hides

const onSignUpSuccess = function (response) {
  console.log('in then for sign-up')
  store.email = response.user.email
  $('#message').text('Great Success! Thanks for signing up')
  $('#message').show()
  $('#sign-up').hide()
  $('#sign-in').show()
  $('#signInButton').hide()
  $('.form-control').trigger('reset')
}

const onSignInSuccess = function (response) {
  console.log('in then for sign-in')
  store.user = response.user
  $('#message').text(`Great Success! You are signed in as ${store.user.email}`)
  $('#message').show()
  $('#signOutButton').show()
  $('#newGameButton').show()
  $('#signUpButton').hide()
  $('#signInButton').hide()
  $('#backButton1').hide()
  $('#sign-in').hide()
  $('.form-control').trigger('reset')
}

const onSignOutSuccess = function () {
  console.log('in then for Sign Out')
  $('#message').text('Great Success! You are now signed out')
  $('#signUpButton').show()
  $('#signInButton').show()
  $('#backButton1').hide()
  $('#signOutButton').hide()
  $('#newGameButton').hide()
  $('#game-board').hide()
  setTimeout(() => {$('#message').text('Welcome!')}, 3500)

  $('.form-control').trigger('reset')
}

const onNewGameSuccess = function (response) {
  console.log('in then for new game')
  store.game = response.game
}
const onGameUpdateSuccess = function (response) {
  console.log('in then for game update')
  store.game = response.game
  store.playedCellsArray = store.game.cells
  console.log('api game is over', response.game.over)
}

const onFailure = function () {
  console.log('in catch')
  $('#message').text('Uh OH! Something went wrong, please try again.')
}

module.exports = {
  onSignUpSuccess,
  onSignInSuccess,
  onSignOutSuccess,
  onNewGameSuccess,
  onGameUpdateSuccess,
  onFailure
}
