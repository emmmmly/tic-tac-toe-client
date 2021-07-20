'use strict'
// importing other files
const getFormFields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

// game variables
let xTurn = true
let currentPlayer

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
  api.newGame()
    .then(ui.onNewGameSuccess)
    .catch(ui.onFailure)
  $('#message').text('It\'s X\'s Turn!')
  $('.col').text('')
  xTurn = true
}

const onSpaceSelection = function (event) {
  console.log('Board Clicked')
  // sets currentPlayer to X if true and O if false.
  currentPlayer = xTurn ? 'X' : 'O'

  // creates a container variable to store which element (target) I clicked (event) on.
  const target = event.target

  // creates a container variable to store the data-cell-index (dataset) number of the clicked (event)
  const cellIndex = target.dataset.cellIndex
  if ($(target).is(':empty')) {
    $(target).text(currentPlayer)
    console.log(currentPlayer)
    const game = {
      cell: {
        index: cellIndex,
        value: currentPlayer
      },
      over: false
    }
    console.log('cellIndex is', cellIndex)
    api.gameUpdate(game)
      .then(ui.onGameUpdate)
      .catch(ui.onFailure)
    xTurn = !xTurn
    // is xTurn true? if yes then "X" if false then "O"
    currentPlayer = xTurn ? 'X' : 'O'
    $('#message').text(`It's ${currentPlayer}'s Turn!`)
    return xTurn
  } else {
    $('#message').text('Oops! That cell is taken. Please choose another.')
  }
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onNewGame,
  onSpaceSelection
}
