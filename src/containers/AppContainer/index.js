import React from 'react';
import { connect } from 'react-redux'
import { setDrawerOpen } from '../../actions/app'
import { setupDdpListeners } from '../../ducks/ddp/collections'

import { push } from 'react-router-redux';
import App from '../../components/App'

const mapStateToProps = (state) => {
  return {
    drawerOpen: state.app.get('drawerOpen')
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onComponentDidMount() {
      dispatch(setupDdpListeners())
    },
    onChangeDrawerState(open) {
      dispatch(setDrawerOpen(open))
    },
    onClickNewPatrolman() {
      dispatch(push('/new-bot'))
    },
  }
}

class AppContainer extends React.Component {
  componentDidMount() {
    this.props.onComponentDidMount()
  }

  render() {
    return <App {...this.props} />
  }
}

AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer)

export default AppContainer
