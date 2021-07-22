'use strict'

const store = require('../store')
// TO DO: write a function to handle the various shows and hides


const onSignUpSuccess = function (response) {
  console.log('in then for sign-up')
  console.log(response)
  $('#message').text('Great Success! Thanks for signing up')
  $('#message').show()
  $('#sign-up').hide()
  $('#sign-in').show()
  $('#signInButton').hide()
}

const onSignInSuccess = function (response) {
  console.log('in then for sign-in')
  store.user = response.user
  $('#message').text(`Great Success! You are signed in as ${store.user.email}`)
  $('#message').show()
  $('#sign-in').hide()
  $('#signUpButton').hide()
  $('#signInButton').hide()
  $('#signOutButton').show()
  $('#newGameButton').show()
}

const onSignOutSuccess = function () {
  console.log('in then for Sign Out')
  $('#message').text('Great Success! You are now signed out')
  $('#signOutButton').hide()
  $('#signUpButton').show()
  $('#signInButton').show()
  $('#game-board').hide()
  $('#newGameButton').hide()
  $('#message').delay(3000).fadeTo(1500, $('#message').text('Welcome'))
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
