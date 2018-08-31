import React, { Component } from "react"
import { Link } from 'react-router-dom'
import logo from './logo.png'
import './Header.css'

class Header extends Component {
  render () {
    return (
      <header className="header">
        <Link to="/" className="header__logo" >
          <img className="header__image" src={logo} alt="An amazing logo"/>
          <p className="header__title">Hacker News</p>
        </Link>
        <div className="header__menu">
          <Link to='/news' children='news' className="header__item-menu" />
        </div>
      </header>
    )
  }
}

export default Header
