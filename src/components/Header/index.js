import React, { Component } from "react"
import { Router, Route, Switch } from 'react-router';
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
            <a href="#!" className="header__item-menu">news</a>
            <span className="header__menu-divisor"></span>
            <a href="#!" className="header__item-menu">best stories</a>
            <span className="header__menu-divisor"></span>
            <a href="#!" className="header__item-menu">donnuts?</a>
          </div>
      </header>
    )
  }
}

export default Header
