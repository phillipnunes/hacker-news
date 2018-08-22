import React, { Component } from "react"
import logo from './logo.svg'
import './Header.css'

class Header extends Component {
  render () {
    return (
      <header className="header">
        <div className="header__logo">
          <img className="header__image" src={logo} alt="An amazing logo"/>
          <p className="header__title">Rack News</p>
        </div>
        <div className="header__menu">
          <a href="#" className="header__item-menu">news</a>
          <a href="#" className="header__item-menu">donnuts?</a>
        </div>
      </header>
    )
  }
}

export default Header
