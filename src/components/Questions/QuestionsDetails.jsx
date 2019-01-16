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
    const question = this.props.questionList[this.props.indexQuestion]
    this.setState({question})
    if (this.props.answerList[this.props.idQuestion]) {
      this.setState({answers: this.props.answerList[this.props.idQuestion]})
    }
  }

  componentDidUpdate (prevProps) {
    if (prevProps.answerList !== this.props.answerList) {
      this.setState({answers: this.props.answerList[this.props.idQuestion]})
    }
  }

  render () {
    return (
      <Fragment>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-2">
                {this.state.question.icon ? (
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
                <h5 className="card-title">{this.state.question.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  {this.state.question.user} - {this.state.question.createAt}
                </h6>
              </div>
            </div>            
            <p className="card-text">{this.state.question.description}</p>
          </div>
        </div>
        
        <div className="container mt-3">
          <h3 className="title">Respuestas</h3>
          <ul className='answers-list'>
            {this.state.answers.length > 0 ? (
              <Fragment>
              {this.state.answers.map((answer, index) => {
                {this.ago = moment(answer.createAt, "lll").fromNow()}
                return (
                <li key={index}>
                  <h5 style={{marginBotton: 0}}>
                    {answer.user}<small> {this.ago}</small>
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
          <AnswerForm 
            idQuestion={this.idQuestion}
          />
        </div>
      </Fragment>
    )
  }
}

function mapStateToProps (state, props) {
  return {
    answerList: state.answerList,
    idQuestion: state.idQuestion,
    indexQuestion: state.indexQuestion,
    questionList: state.questionList
  }
}

export default connect(mapStateToProps)(QuestionsDetails)
