import React from 'react';
import {
  AppBar as MUIAppBar,
  IconButton,
  MenuItem,
  Divider
} from 'material-ui'
import IconMenu from 'material-ui/IconMenu'
import { Menu, Adicionar, Logout, Ajuda, Perfil } from '../../resources/icons'
import { Link } from 'react-router'
const AppBar = ({
  onClickToggleMenu,
  onClickNewPatrolman
}) => (
  <MUIAppBar
    titleStyle={{
      textAlign: 'center'
    }}
    title="POKE-PATROL"
    style={{color: 'black'}}
    onLeftIconButtonTouchTap={onClickToggleMenu}
    iconElementRight={
      <IconMenu
        iconButtonElement={
          <IconButton><Menu /></IconButton>
        }
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}
      >
        {/* <MenuItem leftIcon={<Perfil />} primaryText="Perfil" onClick={onClickPerfilLink} />
        <Divider /> */}
        <MenuItem leftIcon={<Adicionar />} primaryText="New Patrolman" onClick={onClickNewPatrolman} />
        {/* <MenuItem leftIcon={<Ajuda />} primaryText="Ajuda" onClick={onClickAjudaLink} />
        <MenuItem leftIcon={<Logout />} primaryText="Sair" onClick={onClickSairLink} /> */}
      </IconMenu>
    }
  />
)


export default AppBar;
