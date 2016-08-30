import React, { PropTypes } from 'react'
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';
import pokemonsById from '../../lib/pokemons'
import { Map } from 'immutable'

const PokeMap = ({
  encounters = [],
  bots = [],
  markers = [],
  pokestops,
  onMapClick,
  onMarkerRightclick,
  handleSelectEncounter,
  handleMapClick,
  handleBotClick,
  selectedBot,
  handlePokestopClick,
  currentEncounter,
  catchedEncounters,
  fleedEncounters,
  handleCatchPokemon,
  handleEncounterPokemon
}) => {
  return (
      <GoogleMapLoader
        containerElement={
          <div
            style={{
              height: '800px',
            }}
          />
        }
        googleMapElement={
          <GoogleMap
            // ref={(map) => console.log(map)}
            defaultZoom={18}
            defaultCenter={{ lat: -23.632746, lng: -46.713787 }}
            onClick={(e) => handleMapClick(selectedBot, e.latLng.lat(), e.latLng.lng())}
          >
            {encounters && encounters.entrySeq().map(([key, encounter]) => {
              return (
                <Marker
                  animation={currentEncounter === encounter.get('id') ? google.maps.Animation.BOUNCE : null}
                  opacity={catchedEncounters.indexOf(encounter.get('id')) !== -1 ? 0.5 : 1}
                  key={key}
                  onClick={() => {
                    if (currentEncounter === encounter.get('id')) {
                      handleCatchPokemon(selectedBot, encounter.get('id'))
                    } else {
                      handleEncounterPokemon(selectedBot, encounter.get('id'))
                    }
                  }}
                  position={{
                    lat: encounter.get('latitude'),
                    lng: encounter.get('longitude')
                  }}
                  icon={fleedEncounters.indexOf(encounter.get('id')) === -1
                    ? pokemonsById[encounter.get('pokedexNumber')].img
                    : 'https://lh3.googleusercontent.com/-iCtUZjU0hFQ/AAAAAAAAAAI/AAAAAAAAAQo/-ugYw1XIMHE/s46-c-k-no/photo.jpg'}
                  onRightclick={() => onMarkerRightclick(index)} />
              );
            })}

            {bots && bots.entrySeq().map(([key, bot]) => {
              const coords = bot.get('coords')

              if (coords) {
                return (
                  <Marker
                    key={key}
                    icon={selectedBot === bot.get('id') ? 'http://www.ps4-magazin.de/wcf/images/avatars/avatar-9254.gif' : null}
                    onClick={() => handleBotClick(bot.get('id'))}
                    position={{
                      lat: coords.get('latitude'),
                      lng: coords.get('longitude')
                    }}
                  />
                );
              } else {
                return null
              }
            })}

            {pokestops && pokestops.entrySeq().map(([key, pokestop]) => {
              return (
                <Marker
                  key={key}
                  icon={'http://megaicons.net/static/img/icons_sizes/15/534/32/map-marker-ball-left-pink-icon.png'}
                  onClick={() => handlePokestopClick(selectedBot, pokestop.get('id'))}
                  position={{
                    lat: pokestop.get('latitude'),
                    lng: pokestop.get('longitude')
                  }}
                />
              );
            })}
          </GoogleMap>
        }
      />
  )
}

export default PokeMap
