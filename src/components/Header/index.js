import React, { Component } from "react"
import { Link } from 'react-router-dom'
import logo from './logo.png'
import './Header.css'

class Header extends Component {
  render () {
    return (
      <header className="header">
        <div className="header__logo">
          <img className="header__image" src={logo} alt="An amazing logo"/>
          <p className="header__title">Hacker News</p>
        </div>
          <div className="header__menu">
            <Link to='/news' children='news' className="header__item-menu"/>
            <span className="header__menu-divisor"></span>
            <Link to='/best-stories' children='best stories' className="header__item-menu"/>
            <span className="header__menu-divisor"></span>
            <Link to='/donnuts' children='donnuts?' className="header__item-menu"/>
          </div>
      </header>
    )
  }
}

export default Header
