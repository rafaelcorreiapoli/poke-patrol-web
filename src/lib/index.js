export const evolveAll = botId => (dispatch, getState, asteroid) => {
  asteroid.call('pokemons.evolveAll', { botId })
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })
}
