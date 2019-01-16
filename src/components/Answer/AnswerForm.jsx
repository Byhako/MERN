import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import actions from '@/actions'

import moment from 'moment'
import '@/styles/answerForm.styl'

class AnswerForm extends Component {
  constructor(props) {
    super(props)
    
    this.answer = ''

    this.state = {
    }
  }

  handleChangeAnswer = (e) => {
    const value = e.target.value
    this.answer = value
  }

  handleSumbit = (e) => {
    e.preventDefault()

    const newAnswer = {
      idQuestion: this.props.idQuestion,
      createAt: moment().format('lll'),
      user: this.props.user,
      description: this.answer
    }

    console.log('---->', newAnswer)

    this.props.dispatch(actions.answer(newAnswer))

    // clean textarea
    const ta = document.getElementById('ta')
    if (!ta.value || ta.value != ta.defaultValue) {
        ta.value = ta.defaultValue
    }
  }

  render () {
    return (
      <form className="form-answer">
        <textarea
          className="form-control"
          id='ta'
          rows="2"
          placeholder='Respuesta'
          onChange={this.handleChangeAnswer}
        />
        <button
          type="submit"
          className="btn btn-danger mt-2"
          onClick={this.handleSumbit}
        >Responder</button>
      </form>
    )
  }
}

function mapStateToProps (state, props) {
  return {
    user: state.user,
    idQuestion: state.idQuestion
  }
}

export default connect(mapStateToProps)(AnswerForm)
