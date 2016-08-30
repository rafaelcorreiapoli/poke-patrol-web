const SELECT_ENCOUNTER = 'map/SELECT_ENCOUNTER'
const CATCH_POKEMON = 'map/CATCH_POKEMON'
const ENCOUNTER_POKEMON = 'map/ENCOUNTER_POKEMON'
const SELECT_BOT = 'map/SELECT_BOT'

import { Map } from 'immutable'

const initialState = Map({
  selectedEncounterId: null,
  selectedBot: null
})
export default (state = initialState, action) => {
  switch (action.type) {
    case SELECT_ENCOUNTER:
      return state.set('selectedEncounterId', action.payload.encounterId)
    case SELECT_BOT:
      return state.set('selectedBot', action.payload.botId)
    default:
      return state
  }
}

export const selectBot = (botId) => ({
  type: SELECT_BOT,
  payload: {
    botId
  }
})

export const setBotPosition = (botId, latitude, longitude) => (dispatch, getState, asteroid) => {
  console.log(botId, latitude, longitude)
  asteroid.call('bots.setPosition', {botId, latitude, longitude})
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })
}

export const getPokestop = (botId, pokestopId) => (dispatch, getState, asteroid) => {
  asteroid.call('pokestops.get', { botId, pokestopId })
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })
}
export const selectEncounter = (encounterId) => ({
  type: SELECT_ENCOUNTER,
  payload: {
    encounterId
  }
})

export const catchPokemon = (botId, encounterIdNumber) => (dispatch, getState, asteroid) => {
  asteroid.call('encounters.catch', { botId, encounterIdNumber })
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.error(err)
  })
}


export const encounterPokemon = (botId, encounterIdNumber) => (dispatch, getState, asteroid) => {
  asteroid.call('encounters.encounter', { botId, encounterIdNumber })
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.error(err)
  })
}
