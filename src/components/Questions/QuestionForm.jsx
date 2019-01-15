import React, { Component } from 'react'
import { connect } from 'react-redux'
import icons from './icons'

import '@/styles/questionForm.styl'

class QuestionForm extends Component {
  constructor(props) {
    super(props)
    this.title = ''
    this.description = ''
    
    this.state = {}
  }

  handleChangeTitle = (e) => this.title = e.target.value
  handleChangeDescription = (e) => this.description = e.target.value

  handleSubmit = () => {
    const question = {
      title: this.title,
      description: this.description
    }
    console.table(question)
    // this.props.dispatch(actions.login(this.email, this.password))
  }

  versionIcon (icon) {
    let version

    if (icon.versions.font.includes('plain-wordmark')) {
      version = 'plain-wordmark'  
    } else {
      version = icon.versions.font[0]
    }

    return version
  }

  render () {
    return (
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
            <p className='firts-icon'>
              <i className="fas fa-question-circle icon-form" />
              <small>Sin ícono</small>
            </p>
              {icons.map((icon, i) => { 
                {this.icon = `devicon-${icon.name}-${this.versionIcon(icon)} icon-form`}
                return (
                  <i className={this.icon} key={i} />
                )
              })}
            </div>
          
            <div className="col-10 offset-1 px-0">
              <button className="btn-login btn-danger" onClick={this.handleSubmit}>Enviar</button>
            </div>

          </div>
        </div>
        

        <div className="custom-control custom-radio">
          <input type="radio" className="custom-control-input" id="defaultUnchecked" name="defaultExampleRadios" />
          <label className="custom-control-label" htmlFor="defaultUnchecked">Default unchecked</label>
        </div>
      </div>
    )
  }
}

function mapStateToProps (state, props) {
  return {
    questionList: state.questionList,
    answerList: state.answerList
  }
}

export default connect(mapStateToProps)(QuestionForm)
