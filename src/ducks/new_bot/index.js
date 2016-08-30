import { Map } from 'immutable'

const NEW_BOT_REQUEST = 'newBot/NEW_BOT_REQUEST';
const NEW_BOT = 'newBot/NEW_BOT'
const NEW_BOT_SUCCESS = 'newBot/NEW_BOT_SUCCESS'
const NEW_BOT_ERROR = 'newBot/NEW_BOT_ERROR'

export const newBotRequest = () => ({
  type: NEW_BOT_REQUEST,
  payload: {}
})
export const newBotSuccess = (botId) => ({
  type: NEW_BOT_SUCCESS,
  payload: {
    botId
  }
})

export const newBotError = (error) => ({
  type: NEW_BOT_ERROR,
  payload: {
    error
  }
})


export const newBot = (values) => (dispatch, getState, asteroid) => {
  dispatch(newBotRequest())
  asteroid.call('registerBot', values)
  .then(res => {
    dispatch(newBotSuccess(res))
  })
  .catch(err => {
    dispatch(newBotError(err))
  })
}

const initialState = new Map({
  loading: false,
  success: false,
  error: false
})

export default (state = initialState, action) => {
  switch(action.type) {
    case NEW_BOT_REQUEST:
      return state.set('loading', true).set('error', false).set('success', false)
    case NEW_BOT_SUCCESS:
      return state.set('loading', false).set('error', false).set('success', true)
    case NEW_BOT_ERROR:
      return state.set('loading', false).set('error', true).set('success', false)
    default:
      return state;
  }
}
