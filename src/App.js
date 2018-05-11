import React, { Component } from 'react'
import {BrowserRouter} from 'react-router-dom'
import fetchJsonp from 'fetch-jsonp'
import Header from './Header/Header'
import Main from './Main/Main'
import Footer from './Footer/Footer'

import './App.css'

class App extends Component {
    constructor() {
        super()
        this.state = {
            selected : 0,
            subjects : [],
            books : [],
            movies : [],
            musics : []
        }
    }
    componentWillMount(){
        this._getData(this.state.selected)
    }
    _getSearch(value){
        this._getData(this.state.selected,value)
    }
    _getSelect(id){
        this._getData(id)
    }
    //从localstorage中获取data或得到url
    _getData(id,value){
        let URL
        let self = this
        value = value || '五月天'
        switch (id){
            case 0:
                if (localStorage.getItem('subjects')){
                        self.setState({
                            selected : id,
                            subjects : JSON.parse(localStorage.getItem('subjects'))
                        })
                }else {
                    URL = 'https://api.douban.com/v2/movie/top250'
                }
                break
            case 1:
                    URL = 'https://api.douban.com/v2/book/search?q='+ value
                break
            case 2:
                    URL = 'https://api.douban.com/v2/movie/search?q='+ value
                break
            case 3:
                    URL = 'https://api.douban.com/v2/music/search?q='+ value
                break
        }
        if (URL !== undefined) {
            this._fetchAndStore(id,URL)
        }
    }
    //拉取数据并序列化后存入本地
    _fetchAndStore(id,url) {
        let self = this
        fetchJsonp(url)
            .then(function (response) {
                return response.json()
            }).then(function (json) {
            switch (id){
                case 0 :{
                    self.setState({
                        selected : id,
                        subjects : json.subjects
                    })
                    localStorage.setItem('subjects', JSON.stringify(json.subjects));
                }
                    break
                case 1 :{
                    self.setState({
                        selected : id,
                        books : json.books
                    })
                }
                    break
                case 2 :{
                    self.setState({
                        selected : id,
                        movies : json.subjects
                    })
                }
                    break
                case 3 :{
                    self.setState({
                        selected : id,
                        musics : json.musics
                    })
                }
                    break
            }
        }).catch(function (ex) {
            console.log('parsing failed', ex)
        })
    }

    render() {
        return (
    <BrowserRouter>
      <div className="App">
          <Header onPassSearch={this._getSearch.bind(this)}/>
          <Main selected={this.state} />
          <Footer onPassId={this._getSelect.bind(this)}/>
      </div>
    </BrowserRouter>
    )
  }
}

export default App
