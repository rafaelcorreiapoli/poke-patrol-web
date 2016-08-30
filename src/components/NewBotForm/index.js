import React, { PropTypes } from 'react'
import { reduxForm, Field } from 'redux-form' // imported Field
import Joi from 'joi-browser';
import { RaisedButton, Paper } from 'material-ui'
import InputWrapper from '../InputWrapper';
import TextInput from '../TextInput';
import DateInput from '../DateInput';
import DrawRoute from '../DrawRoute';
import { deserializeFormErrors } from '../../utils/form_errors';
import moment from 'moment';
import language from '../../lib/joi/language'
import { telefone, celular, cpf } from '../../utils/patterns'
import SectionHeader from '../SectionHeader'
import {
  urlRegex,
  passwordRegex,
  telefoneRegex,
  celularRegex,
  cpfRegex
} from '../../utils/regex';


const schema = Joi.object().keys({
  email: Joi.string().email().required().label('Google Email'),
  password: Joi.string().min(6).required().label('Senha'),
  nickname: Joi.string().label('Nick'),
  routePoints: Joi.array().label('Route'),
});

const validate = values => {
  const result = Joi.validate(values, schema, {abortEarly: false, language});
  return deserializeFormErrors(result)
}


const NewBotForm = ({
  handleSubmit,
  onSubmit,
  invalid,
  formValues
}) => {
  return (
    <Paper style={{padding: 20, margin: 20}}>
     <form onSubmit={handleSubmit(() => onSubmit(formValues))} autoFill="false">
      <InputWrapper style={{paddingTop: 0}}>
        <SectionHeader text={'New Patrolman'} />
        <Field
          label="Google Account"
          component={TextInput}
          name="email"
        />

        <Field
          label="Google Password"
          component={TextInput}
          name="password"
        />

        <Field
          label="Patrolman nickname"
          component={TextInput}
          name="nickname"
        />

        <Field
          component={DrawRoute}
          name="routePoints"
        />
      </InputWrapper>

      <RaisedButton
        label={'Create bot!'}
        disabled={invalid}
        primary={true}
        type='submit'
      />

    </form>
    </Paper>
  )
}

NewBotForm.propTypes = {
  //fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'newBot',
  destroyOnUnmount: false,
  validate
})(NewBotForm)
