'use strict'
const store = require('./../store')
const config = require('./../config')

const signUp = function (data) {
  return $.ajax({
    url: `${config.apiUrl}/sign-up`,
    method: 'POST',
    data
  })
}

const signIn = function (data) {
  return $.ajax({
    url: `${config.apiUrl}/sign-in`,
    method: 'POST',
    data
  })
}

const signOut = function () {
  return $.ajax({
    url: `${config.apiUrl}/sign-out`,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const newGame = function () {
  return $.ajax({
    url: `${config.apiUrl}/games`,
    method: 'POST',
    headers: {
      Authorization: 'Bearer ' + store.user.token,
      data: {}
    }
  })
}

const gameUpdate = function (game) {
  return $.ajax({
    url: config.apiUrl + '/games/' + store.game._id,
    method: 'PATCH',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    },
    data: {
      game
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  newGame,
  gameUpdate
}
