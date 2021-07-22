'use strict'

const authEvents = require('./auth/events')

$(() => {
  // show and hide elements
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#backButton1').hide()
  $('#signOutButton').hide()
  $('#newGameButton').hide()
  $('#game-board').hide()

  // button listeners
  $('#signUpButton').on('click', () => {
    console.log('sign-up clicked')
    $('#backButton1').show()
    $('#sign-up').show()
    $('#signUpButton').hide()
    $('#signInButton').hide()
    $('#sign-in').hide()
    $('.form-control').trigger('reset')
  })
  $('#signInButton').on('click', () => {
    console.log('sign-in clicked')
    $('#backButton1').show()
    $('#sign-in').show()
    $('#signUpButton').hide()
    $('#signInButton').hide()
    $('#sign-up').hide()
    $('.form-control').trigger('reset')
  })
  $('#backButton1').on('click', () => {
    console.log('back button 1 clicked')
    $('#signInButton').show()
    $('#signUpButton').show()
    $('#sign-up').hide()
    $('#sign-in').hide()
    $('#backButton1').hide()
  })
  // form listeners
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#signOutButton').on('click', authEvents.onSignOut)

  // game board listeners
  $('#newGameButton').on('click', authEvents.onNewGame)
  $('#game-board').on('click', authEvents.onSpaceSelection)
})
