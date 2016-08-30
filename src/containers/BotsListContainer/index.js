import React from 'react';
import { connect } from 'react-redux'
import BotsList from '../../components/BotsList'
import { getBots } from '../../selectors/bots'
import lifeCycleEmitter from '../../components/LifeCycleEmitter'
import subscriber from '../../components/Subscriber'
import {
  logInBot,
  startBotPatrol,
  stopBotPatrol
} from '../../ducks/bots'

const mapStateToProps = (state) => {
  return {
    bots: getBots(state)
  }
}

const mapDispatchToProps = (dispatch, {subscribe, unsubscribe}) => {
  return {
    onComponentDidMount() {
      subscribe({
        name: 'bots',
        publication: 'bots'
      })
      subscribe({
        name: 'patrolRoutes',
        publication: 'patrolRoutes'
      })
    },
    onClickLogIn(botId) {
      dispatch(logInBot(botId))
    },
    onClickStartPatrol(botId) {
      dispatch(startBotPatrol(botId))
    },
    onClickStopPatrol(botId) {
      dispatch(stopBotPatrol(botId))
    }
  }
}

const BotsListContainer = subscriber(connect(
  mapStateToProps,
  mapDispatchToProps
)(lifeCycleEmitter(BotsList)))

export default BotsListContainer
