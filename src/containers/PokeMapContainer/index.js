import React from 'react';
import { connect } from 'react-redux'
import subscriber from '../../components/Subscriber'
import lifeCycleEmitter from '../../components/LifeCycleEmitter'
import PokeMap from '../../components/PokeMap'
import { getEncounters } from '../../selectors/encounters'
import { getBots } from '../../selectors/bots'
import { getPokestops } from '../../selectors/pokestops'
import { selectEncounter, selectBot, setBotPosition, getPokestop, catchPokemon, encounterPokemon } from '../../ducks/map'

const mapStateToProps = (state) => {
  const selectedBot = state.map.get('selectedBot')
  let currentEncounter = null
  let catchedEncounters = []
  let fleedEncounters = []

  if (selectedBot) {
    const bot = state.ddp.collections.getIn(['bots', selectedBot])
    if (bot) {
    currentEncounter = bot.get('currentEncounter')
    catchedEncounters = bot.get('catchedEncounters', [])
    fleedEncounters = bot.get('fleedEncounters', [])
    }
  }

  return {
    encounters: getEncounters(state),
    bots: getBots(state),
    pokestops: getPokestops(state),
    selectedBot,
    currentEncounter,
    catchedEncounters,
    fleedEncounters
  }
}

const mapDispatchToProps = (dispatch, { subscribe, unsubscribe }) => {
  return {
    onComponentDidMount() {
      subscribe({
        name: 'encounters',
        publication: 'encounters'
      })
      subscribe({
        name: 'pokestops',
        publication: 'pokestops'
      })
    },
    handleSelectEncounter(encounterId) {
      console.log(encounterId)
      dispatch(selectEncounter(encounterId))
    },
    handleMapClick(botId, latitude, longitude) {
      console.log(latitude, longitude)
      dispatch (setBotPosition(botId, latitude, longitude))
    },
    handleBotClick(botId) {
      console.log(botId)
      dispatch (selectBot(botId))
    },
    handlePokestopClick(botId, pokestopId) {
      console.log(pokestopId)
      dispatch (getPokestop(botId, pokestopId))
    },
    handleCatchPokemon(botId, encounterId) {
      dispatch(catchPokemon(botId, encounterId))
    },
    handleEncounterPokemon(botId, encounterId) {
      console.log(botId, encounterId)
      dispatch(encounterPokemon(botId, encounterId))
    }
  }
}


const PokeMapContainer = subscriber(connect(
  mapStateToProps,
  mapDispatchToProps
)(lifeCycleEmitter(PokeMap)))

export default PokeMapContainer
