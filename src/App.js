import './App.css'
import React, { Component } from 'react'
import Header from './components/Header'
import Content from './components/Content'
import Elliot from './components/Elliot'
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
      hide: true,

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
    this.setState({ news: [] })

    this.newsItemDetails(
      this.paginate(this.state.idNews)
    )
  }

  render() {
    const { error, news } = this.state

    return (
      <BrowserRouter>
        <div className="app">
          <Header />
          <Route path='/' exact component={Elliot} />
          <Route path='/news' render={ _ => <Content error={error} news={news}/>} />

          <ReactPaginate previousLabel={"<"}
                       nextLabel={">"}
                       breakLabel={<a href="">...</a>}
                       breakClassName={"app__break-me"}
                       pageCount={this.state.qtdPages}
                       marginPagesDisplayed={2}
                       pageRangeDisplayed={5}
                       onPageChange={this.handlePagination.bind(this)}
                       containerClassName={"app__pagination"}
                       subContainerClassName={"app__pages app__pagination"}
                       activeClassName={"app__active"} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
