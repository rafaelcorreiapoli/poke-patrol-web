import React, { PropTypes } from 'react'
import { List, Subheader, ListItem, Avatar, IconButton, IconMenu, MenuItem } from 'material-ui'
import BotStatusIcon, {
  BOT_STATUS_IDLE,
  BOT_STATUS_LOGGING_IN,
  BOT_STATUS_LOGGED_IN,
  BOT_STATUS_PATROLLING,
  BOT_STATUS_ERROR
} from '../BotStatusIcon'
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';

const iconButtonElement = (
  <IconButton
    touch={true}
    tooltip="more"
    tooltipPosition="bottom-left"
  >
    <MoreVertIcon />
  </IconButton>
);

const rightIconMenu = (status, onClickLogIn, onClickStartPatrol, onClickStopPatrol) => {
  return (
    <IconMenu
      iconButtonElement={iconButtonElement}
      targetOrigin={{horizontal: 'right', vertical: 'top'}}
      anchorOrigin={{horizontal: 'right', vertical: 'top'}}
    >
      {(status === BOT_STATUS_IDLE || status === BOT_STATUS_ERROR || status === BOT_STATUS_LOGGING_IN) &&
        <MenuItem onClick={onClickLogIn}>Log In</MenuItem>
      }
      {(status === BOT_STATUS_LOGGED_IN || status === BOT_STATUS_LOGGING_IN) &&
        <MenuItem onClick={onClickStartPatrol}>Start Patrol</MenuItem>
      }
      {status === BOT_STATUS_PATROLLING &&
        <MenuItem onClick={onClickStopPatrol}>Stop Patrol</MenuItem>
      }
    </IconMenu>
  )
}

const humanStatus = (status) => {
  switch (status) {
    case 0:
      return 'Idle'
    case 1:
      return 'Logging in...'
    case 2:
      return 'Logged in!'
    case 3:
      return 'Error'
  }
}
const BotsList = ({
  bots,
  onClickLogIn,
  onClickStartPatrol,
  onClickStopPatrol
}) => {
  return (
    <List>
      <Subheader inset={true}>Bots</Subheader>
      {
        bots.entrySeq().map(([key, bot]) => (
          <ListItem
            key={key}
            secondaryTextLines={2}
            leftAvatar={<Avatar src='http://www.avatarsdb.com/avatars/i_beat_anorexia.jpg' />}
            primaryText={bot.get('nickname')}
            secondaryText={
              <p>
                {`${bot.get('email')} / **********`} <br />
              {humanStatus(bot.get('loginStatus'))}
              </p>
            }
            rightIconButton={
              rightIconMenu(bot.get('loginStatus'),
              () => onClickLogIn(bot.get('_id')),
              () => onClickStartPatrol(bot.get('_id')),
              () => onClickStopPatrol(bot.get('_id')))
            }
          />
        ))
      }
    </List>
  )
}

export default BotsList
