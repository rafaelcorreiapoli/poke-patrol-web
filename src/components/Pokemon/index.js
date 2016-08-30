import React, { PropTypes } from 'react'
import moment from 'moment'
import { RaisedButton } from 'material-ui'
import pokemonsById from '../../lib/pokemons'

const Pokemon = ({
  _id,
  pokedexNumber,
  latitude,
  longitude,
  expirationTimeMs,
  handleCatchPokemon,
  handleEncounterPokemon,
  selectedBot
}) => {
  const pokemon = pokemonsById[pokedexNumber] || {}
  if (!pokemon) return null
  const { name, img } = pokemon
  return (
    <div>
      <p><img src={pokemon.img} /></p>
      <p>{pokemon.name} (#{pokedexNumber})</p>
      <p>{latitude}, {longitude}</p>
      <p>{moment(expirationTimeMs).format('DD/MM/YYYY hh:mm:ss')}</p>
      <RaisedButton
        primary={true}
        label="ENCOUNTER"
        onClick={() => handleEncounterPokemon(selectedBot, _id)}
      />
      <RaisedButton
        primary={true}
        label="CATCH"
        onClick={() => handleCatchPokemon(selectedBot, _id)}
      />
    </div>
  )
}

export default Pokemon
