import { combineReducers } from 'redux';
import login from './login'
import app from './app'
import ddp from '../ducks/ddp'
import newBot from '../ducks/new_bot'
import map from '../ducks/map'

import { reducer as formReducer} from 'redux-form';
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  app,
  login,
  ddp,
  newBot,
  map,
  form: formReducer,
  routing: routerReducer
});


export default rootReducer
