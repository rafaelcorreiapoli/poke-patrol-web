import React from 'react';
import { connect } from 'react-redux'
import Pokemon from '../../components/Pokemon'
import { catchPokemon, encounterPokemon } from '../../ducks/map'

const mapStateToProps = (state) => {
  const selectedEncounter = state.map.get('selectedEncounterId')
  let encounterObject
  if (selectedEncounter) {
    const encounter = state.ddp.collections.getIn(['encounters', selectedEncounter]);
    encounterObject = encounter.toObject()
  } else {
    encounterObject = {}
  }

  return {
    ...encounterObject,
    selectedBot: state.map.get('selectedBot')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit(values) {
      dispatch(newBot(values))
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

const NewBot = connect(
  mapStateToProps,
  mapDispatchToProps
)(Pokemon)

export default NewBot
