import React, { Component } from 'react'
import fetchJsonp from 'fetch-jsonp'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import storeName from '../config'
import LoadMore from '../LoadMore'

class Movie extends Component{
    constructor() {
        super()
        this.state = {
            selected : 2,
            movies : {
                data : [],
                page : 0
            },
        }
        this.name = undefined
    }
    componentWillMount(){
        this._getData(this.state.selected)
    }
    _getSearch(value){
        this.name = value
        this._getData(2,value,0)
    }
    _getPage(){
        let page,name
        switch (this.state.selected){
            case 2: {
                page = (this.state.movies.page+1)
                name = this.name
            }
                break
        }
        this._getData(this.state.selected,name,page)
    }
    //从localstorage中获取data或得到url
    _getData(id,value,page){
        let URL
        value = value || storeName.movie.name
        page = (page === undefined) ? storeName.movie.page :page
        let count = page * 20
        switch (id){
            case 2:
                URL = 'https://api.douban.com/v2/movie/search?q='+ value+'&start='+count
                break
        }
        if (URL !== undefined) {
            this._fetchAndStore(id,URL,value,page)
        }
    }
    //拉取数据并序列化后存入本地
    _fetchAndStore(id,url,value,page) {
        let self = this
        storeName.movie.name = value
        storeName.movie.page = page
        fetchJsonp(url)
            .then(function (response) {
                return response.json()
            }).then(function (json) {
            switch (id){
                case 2 :{
                    self.setState({
                        selected : id,
                        movies : {
                            data : json.subjects,
                            page : page
                        }
                    })
                }
                    break
            }
        }).catch(function (ex) {
            console.log('parsing failed', ex)
        })
    }
    render(){
        if (this.state.movies && this.state.movies.data.length == 0)
            return(
                <div>
                    <Header onPassSearch={this._getSearch.bind(this)}/>
                    <div style={{textAlign :'center',margin : '20px'}}>暂无更多数据!</div>
                    <Footer tabid="2"/>
                </div>
            )
        else {
            return (
                <div>
                    <Header onPassSearch={this._getSearch.bind(this)}/>
                    <Main selected={this.state}/>
                    <LoadMore isLoad={this._getPage.bind(this)}/>
                    <Footer tabid="2"/>
                </div>
            )
        }
    }
}

export default Movie
