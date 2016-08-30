const SELECT_BOT  = 'bots/SELECT_BOT'
import { Map } from 'immutable'


export const logInBot = (botId) => (dispatch, getState, asteroid) => {
  asteroid.call('bots.login', {botId})
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })
}


export const startBotPatrol = (botId) => (dispatch, getState, asteroid) => {
  asteroid.call('bots.startPatrol', {botId})
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })
}

export const stopBotPatrol = (botId) => (dispatch, getState, asteroid) => {
  asteroid.call('bots.stopPatrol', {botId})
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })
}
