import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'

import $ from 'jquery'

import '@/styles/signin.styl'

class Signin extends Component {
  constructor(props) {
    super(props)
    this.email = ''
    this.password = ''
  
    this.state = {
      login: false,
      messageError: ''
    }
  }

  handleChangeEmail = (e) => {
    $('#mail').addClass('email-error')
    const value = e.target.value

    // Verifico si el email tiene formato correcto
    const emailRegex = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
    const isValid = emailRegex.test(value)

    if (isValid) {
      $('#mail').removeClass('email-error')
      this.email = value
    } else {
      this.email = false
    }
  }

  handleChangePassword = (e) => this.password = e.target.value

  handleLogin = () => {
    // this.props.dispatch(actions.login(this.email, this.password))
  }

  render () {
    return (
      <Fragment>
        {!this.state.login ? (
          <div className="container my-5">
            <div className="row">
              <div className="col container-login">
                <label htmlFor='mail' className='col-10 offset-1 px-0 label-login'>
                  Correo
                </label>
                <input
                  id='mail'
                  type='email'
                  className='col-10 offset-1 mb-3 input-login'
                  placeholder='user@email.com'
                  onChange={this.handleChangeEmail}
                />
                <label htmlFor='pass' className='col-10 offset-1 px-0 label-login'>
                  Contraseña
                </label>
                <input
                  id='pass'
                  className='col-10 offset-1 mb-3 input-login'
                  onChange={this.handleChangePassword}
                  type="password"
                  placeholder='••••••••••'
                />
              
                <div className="col-10 offset-1 px-0">
                  <button className="btn-login btn-danger" onClick={this.handleLogin}>Iniciar sesión</button>
                </div>

                <p style={{textAlign: 'center', marginTop: '5px'}}>
                  ¿Eres nuevo?
                  <Link to="/signup"> Crear usuario.</Link>
                </p>

              </div>
            </div>
          </div>
        ) : (
          <Redirect to='/table' />
        )
        }
      </Fragment>
    )
  }
}

export default connect()(Signin)