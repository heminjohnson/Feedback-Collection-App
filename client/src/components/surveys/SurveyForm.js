// SurveyForm shows a form for the user to input the data
import React, { Component } from 'react'
import { reduxForm } from 'redux-form'

class SurveyForm extends Component {
  render () {
    return (
      <div>
        Survey Form
      </div>
    )
  }
}

export default reduxForm({
  form: 'surveyForm'
})(SurveyForm)
