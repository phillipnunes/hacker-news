import './App.css'
import React, { Component } from 'react'
import Header from './components/Header'
import Content from './components/Content'
import axios from 'axios'
import { BrowserRouter, Route } from 'react-router-dom'

class App extends Component {
  constructor() {
    super()
    this.state = {
      news: [],
      error: false
    }
  }

  componentDidMount() {
    this.newsIdList()
  }

  newsIdList() {
    axios.get('https://hacker-news.firebaseio.com/v0/newstories.json/')
    .then( response => {
      this.newsItemDetails(response.data)
    })
    .catch( error => {
      this.setState({
        error: error.message
      })
    })
  }

  newsItemDetails(newsIdList) {
    newsIdList.forEach(newsId => {
      axios.get(`https://hacker-news.firebaseio.com/v0/item/${newsId}.json`)
      .then( response => {
        if (response.data.url) {
          this.setState({
            news: [...this.state.news, response.data]
          })
        }
      })
      .catch( error => {
        console.log(error)
      })
    })
  }

  render() {
    const { error, news } = this.state

    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route path='/news' render={()=><Content error={error} news={news}/>} />
          <Route path='/best-stories' render={()=><Content error={error} news={news}/>} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
