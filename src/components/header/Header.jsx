import React from 'react'

import NavBar from './navBar'

import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="logo">
          <a href="/">
              <img src="icon/logo.svg" alt="logo" className="logo__image" />
          </a>
          <div className="logo__text">yume ayasaki</div>
      </div>
      <NavBar />
    </header>
  )
}

export default Header