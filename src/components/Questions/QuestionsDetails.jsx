import React, { Component, Fragment } from 'react'
import moment from 'moment'
import AnswerForm from '@/components/Answer/AnswerForm'

import '@/styles/questionsDetails.styl'

class QuestionsDetails extends Component {
  constructor(props) {
    super(props)

    moment.locale('es')
    const now = moment().format('YYYYMMDDhmmss')
    const createAt = moment(now, "YYYYMMDDhmmss").fromNow()

    this.state = {
      title: 'Nueva pregunta Android',
      description: 'No se como hacer un header en mi movil',
      createAt,
      icon: 'devicon-android-plain',
      answers: []
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
            {this.state.answers.lenght > 0 ? (
              <Fragment>
              <li>
                <h5 style={{marginBotton: 0}}>Pepito <small>Hace dos minutos</small> </h5>
                <p className='description-answer'>yo tengo la respuesta.</p>
              </li>
              </Fragment>
            ) : (
              <p>sé el primero en responder.</p>
            )}
          </ul>          
        </div>
  
        <div className='answer-form'>
          <AnswerForm/>
        </div>
      </Fragment>
    )
  }
}

export default QuestionsDetails
