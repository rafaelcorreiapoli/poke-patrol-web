import { combineReducers } from 'redux';
import login from './login'
import app from './app'
import ddp from '../ducks/ddp'

import { reducer as formReducer} from 'redux-form';
import { routerReducer } from 'react-router-redux'

const rootReducer = combineReducers({
  app,
  login,
  ddp,
  form: formReducer,
  routing: routerReducer
});


export default rootReducer
