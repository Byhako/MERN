import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { Link, Redirect } from 'react-router-dom'
import actions from '@/actions'

import $ from 'jquery'

import '@/styles/signin.styl'

class Signup extends Component {
  constructor(props) {
    super(props)
    this.name = ''
    this.surname = ''
    this.email = ''
    this.password = ''
    this.password2 = ''
  
    this.state = {
      messageError: ''
    }
  }

  handleChangeName = (e) => this.name = e.target.value
  handleChangeSurname = (e) => this.surname = e.target.value
  handleChangePassword = (e) => this.password = e.target.value

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

  handleChangePassword2 = (e) => {
    this.password2 = e.target.value
    // Verifico si las contraseñas coinciden
    if (this.password === this.password2) {
      $('#pass').removeClass('email-error')
      $('#pass2').removeClass('email-error')
    } else {
      $('#pass').addClass('email-error')
      $('#pass2').addClass('email-error')
    }
  }
 

  handleRegister = () => {
    const user = {
      firstName: this.name,
      surname: this.surname,
      email: this.email,
      password: this.password
    }

    console.log(user)
    
    this.props.dispatch(actions.signup(user))
  }

  render () {
    return (
      <Fragment>
        {!this.props.login ? (
          <div className="container my-5">
            <div className="row">
              <div className="col container-login">
                
                <label htmlFor='mane' className='col-10 offset-1 px-0 label-login'>
                  Nombre
                </label>
                <input
                  id='name'
                  type='text'
                  className='col-10 offset-1 mb-3 input-login'
                  placeholder='Tú nombre'
                  onChange={this.handleChangeName}
                />
                
                <label htmlFor='surname' className='col-10 offset-1 px-0 label-login'>
                  Apellido
                </label>
                <input
                  id='surname'
                  type='text'
                  className='col-10 offset-1 mb-3 input-login'
                  placeholder='Tú apellido'
                  onChange={this.handleChangeSurname}
                />
                
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

                <label htmlFor='pass2' className='col-10 offset-1 px-0 label-login'>
                  Confirmar contraseña
                </label>
                <input
                  id='pass2'
                  className='col-10 offset-1 mb-3 input-login'
                  onChange={this.handleChangePassword2}
                  type="password"
                  placeholder='••••••••••'
                />
              
                <div className="col-10 offset-1 px-0">
                  <button className="btn-login btn-danger" onClick={this.handleRegister}>Crear cuenta</button>
                </div>

                <p style={{textAlign: 'center', marginTop: '5px'}}>
                  ¿Ya tienen un usuario?
                  <Link to="/signin"> Inicia sesión</Link>
                </p>

              </div>
            </div>
          </div>
        ) : (
          <Redirect to='/' />
        )
        }
      </Fragment>
    )
  }
}

function mapStateToProps (state, props) {
  return {
    login: state.login
  }
}

export default connect(mapStateToProps)(Signup)