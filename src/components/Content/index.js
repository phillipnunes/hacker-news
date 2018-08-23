import React, { Component } from "react"
import './style.css'
import { template } from "handlebars";

class Content extends Component {
  render () {
    return (
      <div>
        <div className="content">
          <a className="content__news-link" href="#!">
            <p className="content__title">Some news title here</p>
          </a>
          <a className="content__author-link" href="#!">
            <p className="content__author-url">(fun-fun.fun)</p>
          </a>
        </div>
      </div>
    )
  }
}

export default Content
