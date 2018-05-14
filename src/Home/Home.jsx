import React, { Component } from 'react'
import fetchJsonp from 'fetch-jsonp'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import storeName from '../config'
import LoadMore from '../LoadMore'

class Home extends Component{
    constructor() {
        super()
        this.state = {
            selected : 0,
            subjects :{
                data :[],
                page : 0
            },
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
            case 0 :{
                page = (this.state.subjects.page+1)
            }
                break
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
        if (page === undefined)
        {
            if (id === 0)
                page = storeName.subjects.page
            else
                page = storeName.movie.page
        }
        // page = page || this.state.subjects.page
        let count = page *20
        switch (id){
            case 0:
                    URL = 'https://api.douban.com/v2/movie/top250?start='+count
                break
            case 2:
                    URL = 'https://api.douban.com/v2/movie/search?q='+ value+'&start='+count
                break
        }
        if (URL !== undefined) {
            this._fetchAndStore(id,URL,value,page)
        }
    }
    //拉取数据
    _fetchAndStore(id,url,value,page) {
        let self = this
        if (value !== undefined)
            storeName.movie.name = value
        fetchJsonp(url)
            .then(function (response) {
                return response.json()
            }).then(function (json) {
            switch (id){
                case 0 :{
                    self.setState({
                        selected : id,
                        subjects : {
                            data : json.subjects,
                            page : page
                        }
                    })
                }
                storeName.subjects.page = page
                    break
                case 2 :{
                    self.setState({
                        selected : id,
                        movies :{
                            data : json.subjects,
                            page : page
                        }
                    })
                }
                storeName.movie.page = page
                    break
            }
        }).catch(function (ex) {
            console.log('parsing failed', ex)
        })
    }

    render(){
        switch (this.state.selected){
            case 0 :{
                if (this.state.subjects && this.state.subjects.data.length == 0)
                    return(
                        <div>
                            <Header onPassSearch={this._getSearch.bind(this)} />
                            <div style={{textAlign :'center',margin : '20px'}}>暂无更多数据!</div>
                            <Footer tabid="2" />
                        </div>
                    )
                else
                    return(
                        <div>
                            <Header onPassSearch={this._getSearch.bind(this)} />
                            <Main selected={this.state} />
                            <LoadMore isLoad={this._getPage.bind(this)} />
                            <Footer tabid="2" />
                        </div>
                    )
            }
            break
            case 2:{
                if (this.state.movies && this.state.movies.data.length == 0)
                    return(
                        <div>
                            <Header onPassSearch={this._getSearch.bind(this)} />
                            <div style={{textAlign :'center',margin : '20px'}}>暂无更多数据!</div>
                            <Footer tabid="2" />
                        </div>
                    )
                else
                    return(
                        <div>
                            <Header onPassSearch={this._getSearch.bind(this)} />
                            <Main selected={this.state} />
                            <LoadMore isLoad={this._getPage.bind(this)} />
                            <Footer tabid="2" />
                        </div>
                    )
            }
            break
        }
    }
}

export default Home
