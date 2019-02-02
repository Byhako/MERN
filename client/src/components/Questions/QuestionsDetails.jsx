import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'

import moment from 'moment'
import uuidv4 from 'uuid/v4'
import AnswerForm from '@/components/Answer/AnswerForm'

import '@/styles/questionsDetails.styl'

class QuestionsDetails extends Component {
  constructor(props) {
    super(props)

    moment.locale('es')
    const now = moment().format('lll')
    const createAt = moment(now, "lll").fromNow()

    this.state = {
      question: '',
      answers: []
    }
  }
  
  componentDidMount () {
    const index = this.props.indexQuestion
    if (index) {
      const question = this.props.questionList[index]
      const answers = question.answers
      this.setState({question, answers})
    }
  }

  componentDidUpdate (prevProps) {
    if (prevProps.questionList !== this.props.questionList) {
      console.log('ACTUALIZAR')
      const question = this.props.questionList[this.props.indexQuestion]
      const answers = question.answers
      console.log(answers)
      this.setState({question, answers})
    }
  }

  render () {
    const { question, answers } = this.state

    if (question && answers) {
      return (
        <Fragment>
          <div className="card">
            <div className="card-body">
              <div className="row">
                <div className="col-2">
                  {question.icon ? (
                    <i 
                      className={this.state.question.icon}
                      style={{fontSize: '39px'}}
                    />
                  ) : (
                    <i
                      className="fas fa-question-circle"
                      style={{fontSize: '39px'}} 
                    />
                  )}
                </div>
                <div className="col">
                  <h5 className="card-title">{question.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">
                    {question.user.firstName} &nbsp;
                    {question.user.surname} - &nbsp;
                    {moment(question.createAt, "lll").fromNow()}
                  </h6>
                </div>
              </div>            
              <p className="card-text">{question.description}</p>
            </div>
          </div>
          
          <div className="container mt-3">
            <h3 className="title">Respuestas</h3>
            <ul className='answers-list'>
              {answers.length > 0 ? (
                <Fragment>
                {answers.map((answer, index) => {
                  {this.ago = moment(answer.createAt, "lll").fromNow()}
                  return (
                  <li key={index}>
                    <h5 style={{marginBotton: 0}}>
                      {answer.user.firstName} &nbsp; {answer.user.surname} &nbsp;
                      <small> {this.ago}</small>
                    </h5>
                    <p className='description-answer'>{answer.description}</p>
                  </li>
                )})}
                </Fragment>

              ) : (
                <p>sé el primero en responder.</p>
              )}
            </ul>          
          </div>

          {/*Answer form*/}
          <div className='answer-form'>
            <AnswerForm />
          </div>
        </Fragment>
      )
    } else {
      return (
        <div className="container-spiner"
          style={{display: 'flex', justifyContent: 'center', marginTop: '30px'}}
        >
          <div
            className="spinner-border"
            style={{width: "3rem", height: "3rem", color: 'brown'}} 
            role="status"
          >
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      )
    }
  }
}

function mapStateToProps (state, props) {
  return {
    indexQuestion: state.indexQuestion,
    questionList: state.questionList,
    user: state.user
  }
}

export default connect(mapStateToProps)(QuestionsDetails)
