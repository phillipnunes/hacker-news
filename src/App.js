import './App.css'
import React, { Component } from 'react'
import Header from './components/Header'
import Content from './components/Content'

class App extends Component {
  constructor () {
    super()
    this.state = {
      list: [1,1,1]
    }
  }

  render() {
    return (
      <div className="App">
        <Header />
        { this.state.list.map( _ => <Content /> ) }
      </div>
    )
  }
}

export default App
