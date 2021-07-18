'use strict'

const getFormFields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

// event handler for sign-up
const onSignUp = function (e) {
  // prevent default functionality of form
  e.preventDefault()
  // uses getFormFields to pull data from the form and store it in a variable
  const data = getFormFields(this)
  api.signUp(data)
    .then(ui.onSignUpSuccess)
    .catch(ui.onFailure)
}

// event handler for sign-in
const onSignIn = function (e) {
  // prevent default functionality of form
  e.preventDefault()
  // uses getFormFields to pull data from the form and store it in a variable
  const data = getFormFields(this)
  api.signIn(data)
    .then(ui.onSignInSuccess)
    .catch(ui.onFailure)
}

// event handler for sign-out
const onSignOut = function () {
  api.signOut()
    .then(ui.onSignOutSuccess)
    .catch(ui.onFailure)
}

// new game event handler
const onNewGame = function () {
  $('#game-board').show()
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onNewGame
}
