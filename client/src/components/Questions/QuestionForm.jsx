import React, { Component, Fragment } from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import icons from './icons'
import moment from 'moment'
import uuidv4 from 'uuid/v4'

import actions from '@/actions'
import '@/styles/questionForm.styl'

class QuestionForm extends Component {
  constructor(props) {
    super(props)
    this.title = ''
    this.description = ''
    this.iconName = ''
    
    this.state = {}
  }

  handleChangeTitle = (e) => this.title = e.target.value
  handleChangeDescription = (e) => this.description = e.target.value
  handleSelectIcon = (e) => this.iconName = e.target.value

  versionIcon (icon) {
    let version

    if (icon.versions.font.includes('plain-wordmark')) {
      version = 'plain-wordmark'  
    } else {
      version = icon.versions.font[0]
    }

    return version
  }

  handleSubmit = () => {
    const createAt = moment().format('lll')

    const question = {
      idQuestion: uuidv4(),
      title: this.title,
      description: this.description,
      createAt,
      icon: this.iconName,
      answers: [],
      user: {
        firstName: 'Ruben',
        surname: 'Acosta'
      }
    }
    this.props.dispatch(actions.newQuestion(question))
  }

  render () {
    return (
      <Fragment>
        {this.props.newQuestion ? (
          <Redirect to='/' />
        ) : (
          <div className="container my-5">
            <div className="row">
              <div className="col">
                <label htmlFor='title' className='col-10 offset-1 px-0 label-login'>
                  Título
                </label>
                <input
                  id='title'
                  type='text'
                  className='col-10 offset-1 mb-3 input-login'
                  placeholder='título de pregunta'
                  onChange={this.handleChangeTitle}
                />
                <label htmlFor='description' className='col-10 offset-1 px-0 label-login'>
                  Descripción
                </label>
                <input
                  id='description'
                  className='col-10 offset-1 mb-3 input-login'
                  onChange={this.handleChangeDescription}
                  type="text"
                  placeholder='Descripción'
                />
                
                {/* Lista de iconos */}
                <div className="icons-list">

                  <div className="custom-control custom-radio">
                    <input
                      type="radio"
                      className="custom-control-input"
                      id='firts'
                      value='noneIcon'
                      name='icon'
                      onChange={this.handleSelectIcon}
                    />
                    <label className="custom-control-label" htmlFor='firts'>
                      <p className='firts-icon'>
                        <i className="fas fa-question-circle icon-form" />
                        <small>Sin ícono</small>
                      </p>
                    </label>
                  </div>
                  {icons.map((icon, i) => { 
                    {this.icon = `devicon-${icon.name}-${this.versionIcon(icon)} icon-form`}
                    return (
                      <div className="custom-control custom-radio" key={i}>
                        <input 
                          type="radio"
                          className="custom-control-input"
                          id={i} value={this.icon}
                          name='icon'
                          onChange={this.handleSelectIcon}
                        />
                        <label className="custom-control-label" htmlFor={i}>
                          <i className={this.icon}/>
                        </label>
                      </div>
                    )
                  })}
                </div>
              
                <div className="col-10 offset-1 px-0">
                  <button className="btn-login btn-danger" onClick={this.handleSubmit}>Enviar</button>
                </div>

              </div>
            </div>
          </div>
        )}
      </Fragment>
    )
  }
}

function mapStateToProps (state, props) {
  return {
    questionList: state.questionList,
    answerList: state.answerList,
    newQuestion: state.newQuestion
  }
}

export default connect(mapStateToProps)(QuestionForm)
