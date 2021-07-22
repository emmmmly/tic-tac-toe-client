'use strict'
const store = require('../store')
// importing other files
const getFormFields = require('./../../lib/get-form-fields')
const api = require('./api')
const ui = require('./ui')

// game variables
let xTurn = true
let currentPlayer
let gameOver = false
let tie = false

const winCheck = function () {
  const a = store.playedCellsArray[0]
  const b = store.playedCellsArray[1]
  const c = store.playedCellsArray[2]
  const d = store.playedCellsArray[3]
  const e = store.playedCellsArray[4]
  const f = store.playedCellsArray[5]
  const g = store.playedCellsArray[6]
  const h = store.playedCellsArray[7]
  const j = store.playedCellsArray[8]

  if (
    a === '' && b === '' && c === '' && d === '' && e === '' && f === '' && g === '' && h === '' && j === '') {
    return gameOver
  } else if (a !== '' && a === b && b === c) {
    gameOver = true
    console.log('abc', a, b, c)

    // check middle row win (345)
  } else if (d !== '' && d === e && e === f) {
    gameOver = true
    console.log('def')

    // check bottom row win (678)
  } else if (g !== '' && g === h && h === j) {
    gameOver = true
    console.log(ghj)
    // check left column (036)
  } else if (a !== '' && a === d && d === g) {
    gameOver = true
    console.log('adg')
    // check middle column (147)
  } else if (b !== '' && b === e && e === h) {
    gameOver = true
    console.log('beh')
    // check right column (258)
  } else if (c !== '' && c === f && f === j) {
    gameOver = true
    console.log('cfj')
    // check first diagnaol (top left to bottom right) (048)
  } else if (a !== '' && a === e && e === j) {
    gameOver = true
    console.log('aej')
    // check second diagonal (top right to bottom left) (246)
  } else if (c !== '' && c === e && e === g) {
    gameOver = true
    console.log('ceg')
  } else if (
    a !== '' &&
      b !== '' &&
      c !== '' &&
      d !== '' &&
      e !== '' &&
      f !== '' &&
      g !== '' &&
      h !== '' &&
      j !== ''
  ) {
    gameOver = true
    tie = true
  }
  console.log(gameOver)
  return gameOver
}

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
    .catch('in catch for newGame')
  $('#message').text('It\'s X\'s Turn!')
  $('.col').text('')
  xTurn = true
  gameOver = false
  tie = false
  store.playedCellsArray = ['', '', '', '', '', '', '', '']
}

// gameUpdate event handler
const onSpaceSelection = function (event) {
  console.log('Board Clicked')
  // sets currentPlayer to X if true and O if false.
  currentPlayer = xTurn ? 'X' : 'O'

  // creates a container variable to store which element (target) I clicked (event) on.
  const target = event.target

  // creates a container variable to store the data-cell-index (dataset) number of the clicked (event)
  const cellIndex = target.dataset.cellIndex

  // checks if game is active and clicked cell is empty
  // if (winCheck()) {
  //   console.log('first if statement returns', winCheck())
  //   return
  // }
  if (gameOver === false && $(target).is(':empty')) {
    // if it is empty it updates the clicked element to display the currentPlayer's icon, creates a game variable to pass into the api Patch request
    $(target).text(currentPlayer)
    store.game.cells[cellIndex] = currentPlayer
    const game = {
      cell: {
        index: cellIndex,
        value: currentPlayer
      },
      over: winCheck()
    }
    if (gameOver === true && tie === true) {
      $('#message').text('Game Over! it\'s a tie!!')
      return
    } else if (gameOver === true) {
      $('#message').text(`Game Over! ${currentPlayer} wins!!`)
      return
    }
    api
      .gameUpdate(game)
      .then(ui.onGameUpdateSuccess)
      .catch('in catch for gameUpdate')
    // changes xTurn to be the opposite of whatever it currently is.
    xTurn = !xTurn
    // change player after click
    currentPlayer = xTurn ? 'X' : 'O'
    // updates display message to show who's turn it is
    $('#message').text(`It's ${currentPlayer}'s Turn!`)
  } else {
    const gameOverMsg = 'the game is over, press New Game to play again!'
    const cellTakenMsg = 'Oops! That cell is taken, please choose another.'
    const message = gameOver ? gameOverMsg : cellTakenMsg
    $('#message').text(message)
  }
}

module.exports = {
  onSignUp,
  onSignIn,
  onSignOut,
  onNewGame,
  onSpaceSelection
}
