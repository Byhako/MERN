import React from 'react'
import { Link } from 'react-router-dom'

function Header () {
  return (
    <nav className="navbar navbar-dark bg-primary">
      <Link to="/">
        <span className="navbar-brand">Overflow</span>
      </Link>
      <Link to="/signin">
        <i className="fas fa-user-circle"
          style={{color: 'white', fontSize: '1em', cursor: 'pointer'}} />
      </Link>
    </nav>
  )
}

export default Header
