import React, { Component } from "react"
import './style.css'

class Content extends Component {
  tinyUrl(url) {
    return url.split('/')[2]
  }

  render () {
    if (this.props.error) {
      return <div>Error: {this.props.error}</div>
    } else if (this.props.news) {
      return (
        this.props.news.map( (item, index) =>
          <div key={index}>
            <div className="content">
              <a className="content__news-link" href={item.url} target="_blank">
                <p className="content__title">{item.title}</p>
              </a>
              <a className="content__author-link" href="#!">
                <p className="content__author-url">({this.tinyUrl(item.url)})</p>
              </a>
            </div>
          </div>
        )
      )
    }
  }
}

export default Content
