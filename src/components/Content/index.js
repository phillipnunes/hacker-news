import React, { Component } from "react"
import './style.css'
import { template } from "handlebars";

class Content extends Component {
  render () {
    return (
      <div className="content">
        <a className="content__news-link" href="#!">
          <p className="content__title">Some news title here</p>
        </a>
        <a className="content__author-link" href="#!">
          <p className="content__author-url">(fun-fun.it)</p>
        </a>
      </div>
    )
  }
}

export default Content
