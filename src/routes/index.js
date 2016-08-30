import React, { PropTypes } from 'react'
import { Router, IndexRoute, Route, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'

import App from '../containers/AppContainer';
import WelcomePage from '../pages/WelcomePage'
import MapPage from '../pages/MapPage'
import NewBotPage from '../pages/NewBotPage'
import Login from '../containers/Login'
import RecuperarSenha from '../containers/RecuperarSenha'

const Routes = () => {
  return (
    <Router history={syncHistoryWithStore(browserHistory, store)}>
      <Route path="/" component={App}>
        <Route component={WelcomePage}>
          <IndexRoute component={Login} />
          <Route path="recuperar-senha" component={RecuperarSenha}/>
        </Route>
        <Route path="map" component={MapPage} />
        <Route path="new-bot" component={NewBotPage} />
      </Route>
    </Router>
  )
}

export default Routes
