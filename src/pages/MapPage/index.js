import React, { PropTypes } from 'react'
import PokeMapContainer from '../../containers/PokeMapContainer/'
import BotsListContainer from '../../containers/BotsListContainer/'
import SelectedPokemon from '../../containers/SelectedPokemon'
import EvolveAll from '../../containers/EvolveAll'
const MapPage = ({

}) => {
  return (
    <div>
      <div style={{maxWidth: 500}}>
      <BotsListContainer />
      </div>

      <PokeMapContainer />
      <SelectedPokemon />
      <EvolveAll />
    </div>
  )
}

export default MapPage
