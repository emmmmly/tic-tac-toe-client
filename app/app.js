'use strict'

const authEvents = require('./auth/events')

$(() => {
  // show and hide elements
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#signUpButton').on('click', () => {
    console.log('sign-up clicked')
    $('#signUpButton').hide()
    $('#signInButton').show()
    $('#sign-up').show()
    $('#sign-in').hide()
    $('.form-control').trigger('reset')
  })
  $('#signInButton').on('click', () => {
    console.log('sign-in clicked')
    $('#signUpButton').show()
    $('#signInButton').hide()
    $('#sign-in').show()
    $('#sign-up').hide()
    $('.form-control').trigger('reset')
  })
  $('#signOutButton').hide()
  $('#newGameButton').hide()
  $('#game-board').hide()

  // form listeners
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#signOutButton').on('click', authEvents.onSignOut)

  // game board listeners
  $('#newGameButton').on('click', authEvents.onNewGame)
  $('#game-board').on('click', authEvents.onSpaceSelection)
})
