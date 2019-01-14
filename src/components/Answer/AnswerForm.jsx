import React, { Component, Fragment } from 'react'
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
    console.log(this.answer)
  }

  render () {
    return (
      <form className="form-answer">
        <textarea
          className="form-control"
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

export default AnswerForm
