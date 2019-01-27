import React, { Component } from 'react'
import { Link, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'


class Header extends Component {
  state = {
    login: true
  }

  componentDidUpdate(prepros) {
    if (prepros.login !== this.props.login) {
      this.setState({login: this.props.login})
    }
  }

  Loguot = () => {
    this.props.dispatch({ type: 'SET_LOGUOT' })
  }

  render () {
    return (
      <nav className="navbar navbar-dark bg-primary">
        <Link to="/">
          <span className="navbar-brand">Overflow</span>
        </Link>
        {this.props.login && 
          <p
            style={{margin: 'auto', color: 'white'}}
          >{this.props.user}</p>
        }
        {this.props.login ? (
          <div onClick={this.Loguot}>
            <i className="fas fa-user-circle"
              style={{color: 'white', fontSize: '1em', cursor: 'pointer'}} />
          </div>
        ) : (
          <Link to="/signin">
            <i className="fas fa-user-circle"
              style={{color: 'white', fontSize: '1em', cursor: 'pointer'}} />
          </Link>
        )}
        {!this.state.login &&
          <Redirect to='/' />
        }
      </nav>
    )
  }
}

function mapStateToProps (state, props) {
  return {
    login: state.login,
    user: state.user
  }
}

export default connect(mapStateToProps)(Header)
