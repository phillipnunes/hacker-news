import './App.css'
import React, { Component } from 'react'
import Header from './components/Header'
import Content from './components/Content'
import axios from 'axios'

class App extends Component {
  constructor() {
    super()
    this.state = {
      newsList: [],
      error: false
    }
  }

  componentDidMount() {
    axios.get('https://hacker-news.firebaseio.com/v0/newstories.json/')
      .then( response => {
        this.setState({
          newsList: response.data
        })
      })
      .catch( error => {
        this.setState({
          error: error.message
        })
      })
  }

  render() {
    const { error, newsList } = this.state

    return (
      <div className="App">
        <Header />
        <Content error={error} newsList={newsList} />
      </div>
    )
  }
}

export default App
