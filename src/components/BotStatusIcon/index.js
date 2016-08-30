import React, { PropTypes } from 'react'
export const BOT_STATUS_IDLE = 0;
export const BOT_STATUS_LOGGING_IN = 1;
export const BOT_STATUS_LOGGED_IN = 2;
export const BOT_STATUS_PATROLLING = 3;
export const BOT_STATUS_ERROR = 4;

import Idle from 'material-ui/svg-icons/av/stop';
import LoggingIn from 'material-ui/svg-icons/action/hourglass-empty';
import LoggedIn from 'material-ui/svg-icons/action/lock-open';
import Patrolling from 'material-ui/svg-icons/maps/directions-walk';
import Error from 'material-ui/svg-icons/alert/error';

const BotStatusIcon = ({
  status
}) => {
  switch (status) {
    case BOT_STATUS_IDLE: return <Idle />
    case BOT_STATUS_LOGGING_IN: return <LoggingIn />
    case BOT_STATUS_LOGGED_IN: return <LoggedIn />
    case BOT_STATUS_PATROLLING: return <Patrolling />
    case BOT_STATUS_ERROR:
    default: return <Error />
  }
}

export default BotStatusIcon
