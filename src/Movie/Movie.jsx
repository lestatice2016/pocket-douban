import React, { Component } from 'react'
import fetchJsonp from 'fetch-jsonp'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import storeName from '../config'

class Movie extends Component{
    constructor() {
        super()
        this.state = {
            selected : 2,
            movies : []
        }
    }
    componentWillMount(){
        this._getData(this.state.selected)
    }
    _getSearch(value){
        this._getData(2,value)
    }
    //从localstorage中获取data或得到url
    _getData(id,value){
        let URL
        value = value || storeName.movie
        switch (id){
            case 2:
                URL = 'https://api.douban.com/v2/movie/search?q='+ value
                break
        }
        if (URL !== undefined) {
            this._fetchAndStore(id,URL,value)
        }
    }
    //拉取数据并序列化后存入本地
    _fetchAndStore(id,url,value) {
        let self = this
        storeName.movie = value
        fetchJsonp(url)
            .then(function (response) {
                return response.json()
            }).then(function (json) {
            switch (id){
                case 2 :{
                    self.setState({
                        selected : id,
                        movies : json.subjects
                    })
                }
                    break
            }
        }).catch(function (ex) {
            console.log('parsing failed', ex)
        })
    }
    render(){
        return(
            <div>
                <Header onPassSearch={this._getSearch.bind(this)} />
                <Main selected={this.state}/>
                <Footer tabid="2" />
            </div>
        )
    }
}

export default Movie
