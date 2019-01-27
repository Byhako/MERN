import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'


class Header extends Component {
  Loguot = () => this.props.dispatch({ type: 'SET_LOGUOT' })
  render () {
    return (
      <nav className="navbar navbar-dark bg-primary">
        <Link to="/">
          <span className="navbar-brand">Overflow</span>
        </Link>
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
      </nav>
    )
  }
}

function mapStateToProps (state, props) {
  return {
    login: state.login
  }
}

export default connect(mapStateToProps)(Header)
