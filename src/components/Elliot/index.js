import React, { Component } from 'react'
import Image from './elliot.jpg'
import './style.css'

export default class Elliot extends Component {
  render() {
    return (
      <img className="image-elliot" src={Image} alt="Elliot"/>
    )
  }
}
