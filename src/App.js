import './App.css'
import React, { Component } from 'react'
import Header from './components/Header'
import Content from './components/Content'
import axios from 'axios'
import { BrowserRouter, Route } from 'react-router-dom'
import ReactPaginate from 'react-paginate'

class App extends Component {
  constructor() {
    super()
    this.state = {
      news: [],
      idNews: [],
      error: false,

      qtdPages: 0,
      firstPage: 0
    }
  }

  componentDidMount() {
    this.newsIdList()
  }

  newsIdList() {
    axios.get('https://hacker-news.firebaseio.com/v0/newstories.json/')
    .then( response => {
      this.setState({
        qtdPages: Object.keys(response.data).length,
        idNews: response.data
      })

      this.handlePagination()
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

  paginate(allPages) {
    const qtdToShow = 10
    let firstPage = this.state.firstPage
    let lastPage = firstPage + qtdToShow
    let pagesToRender = allPages.slice(firstPage, lastPage)

    this.setState({
      firstPage: lastPage + 1
    })

    return pagesToRender
  }

  handlePagination() {
    this.setState({ news: [] }) // Isso precisa ser refeito

    this.newsItemDetails(
      this.paginate(this.state.idNews)
    )
  }

  render() {
    const { error, news } = this.state

    return (
      <BrowserRouter>
        <div className="App">
          <Header />
          <Route path='/news' render={()=><Content error={error} news={news}/>} />
          <Route path='/best-stories' render={()=><Content error={error} news={news}/>} />

          <ReactPaginate previousLabel={"previous"}
                       nextLabel={"next"}
                       breakLabel={<a href="">...</a>}
                       breakClassName={"break-me"}
                       pageCount={this.state.qtdPages}
                       marginPagesDisplayed={2}
                       pageRangeDisplayed={5}
                       onPageChange={this.handlePagination.bind(this)}
                       containerClassName={"pagination"}
                       subContainerClassName={"pages pagination"}
                       activeClassName={"active"} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
