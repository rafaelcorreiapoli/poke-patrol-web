import React from 'react';
import { connect } from 'react-redux'
import NewBotForm from '../../components/NewBotForm'
import { formValueSelector } from 'redux-form'
import { newBot } from '../../ducks/new_bot'
const selector = formValueSelector('newBot')

const mapStateToProps = (state) => {
  return {
    formValues: selector(state, 'email', 'password', 'nickname', 'routePoints'),
    loading: state.newBot.loading,
    error: state.newBot.error,
    success: state.newBot.success
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onSubmit(values) {
      console.log(values)
      dispatch(newBot(values))
    }
  }
}

const NewBot = connect(
  mapStateToProps,
  mapDispatchToProps
)(NewBotForm)

export default NewBot
