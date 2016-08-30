import React, { PropTypes } from 'react'
import { connect } from 'react-redux'
import { RaisedButton } from 'material-ui'
import { evolveAll } from '../../ducks/pokemons'

const EvolveAll = ({
  handleEvolveAll,
  selectedBot
}) => {
  return (
    <RaisedButton
      primary={true}
      onClick={() => handleEvolveAll(selectedBot)}
      label="EVOLVE ALL"
    />
  )
}

const mapStateToProps = state => ({
  selectedBot: state.map.get('selectedBot')
})

const mapDispatchToProps = dispatch => ({
  handleEvolveAll(botId) {
    dispatch (evolveAll(botId))
  }
})
export default connect(
  mapStateToProps,
  mapDispatchToProps)(EvolveAll)
