'use strict'

const authEvents = require('./auth/events')

$(() => {
  // show and hide buttons
  $('#sign-up').hide()
  $('#sign-in').hide()
  $('#signUpButton').on('click', () => {
    console.log('sign-up clicked')
    $('#signUpButton').hide()
    $('#signInButton').show()
    $('#sign-up').show()
    $('#sign-in').hide()
  })
  $('#signInButton').on('click', () => {
    console.log('sign-up clicked')
    $('#signUpButton').show()
    $('#signInButton').hide()
    $('#sign-in').show()
    $('#sign-up').hide()
  })
  $('#signOutButton').hide()

  // form listeners
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-in').on('submit', authEvents.onSignIn)
  $('#signOutButton').on('click', authEvents.onSignOut)
})
