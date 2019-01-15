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
    this.idQuestion = uuidv4()

    this.state = {
      idQuestion: this.idQuestion,
      title: 'Nueva pregunta Android',
      description: 'No se como hacer un header en mi movil',
      createAt,
      icon: 'devicon-android-plain',
      answers: []
    }
  }

  componentDidUpdate (prevProps) {
    if (prevProps.answerList !== this.props.answerList) {
      this.setState({answers: this.props.answerList[this.idQuestion]})
    }
  }

  render () {
    return (
      <Fragment>
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-2">
                <i className={this.state.icon} style={{fontSize: '39px'}} />
              </div>
              <div className="col">
                <h5 className="card-title">{this.state.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">Ruben - {this.state.createAt}</h6>
              </div>
            </div>            
            <p className="card-text">{this.state.description}</p>
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
                  <h5 style={{marginBotton: 0}}>{answer.user}<small> {this.ago}</small> </h5>
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
    answerList: state.answerList
  }
}

export default connect(mapStateToProps)(QuestionsDetails)
