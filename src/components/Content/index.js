import React, { Component } from "react"
import './style.css'

class Content extends Component {
  render () {
    if (this.props.error) {
      return <div>Error: {this.props.error}</div>
    }  else {
      return (
        this.props.newsList.map( (_, index) =>
          <div key={index}>
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
      )
    }
  }
}

export default Content
