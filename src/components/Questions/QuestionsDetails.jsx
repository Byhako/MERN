import React, { Component } from 'react'
import moment from 'moment'

class QuestionsDetails extends Component {
  constructor(props) {
    super(props)

    moment.locale('es')
    const now = moment().format('YYYYMMDD')
    const createAt = moment(now, "YYYYMMDD").fromNow()

    this.state = {
      title: 'Nueva pregunta Android',
      description: 'No se como hacer un header en mi movil',
      createAt,
      icon: 'devicon-android-plain'
    }
  }

  render () {
    return (
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
    )
  }
}

export default QuestionsDetails
