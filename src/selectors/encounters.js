export const getEncounters = (state) => {
  return state.ddp.collections.get('encounters')
}
