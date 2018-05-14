import React, { Component } from 'react'
import fetchJsonp from 'fetch-jsonp'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import storeName from '../config'
import LoadMore from '../LoadMore'

class Book extends Component{
    constructor() {
        super()
        this.state = {
            selected : 1,
            books : {
                data : [],
                page : 0
            }
        }
        this.name = undefined
    }
    componentWillMount(){
        this._getData(this.state.selected)
    }
    _getSearch(value){
        this.name = value
        this._getData(1,value,0)
    }
    _getPage(){
        let page,name
        switch (this.state.selected){
            case 1: {
                page = (this.state.books.page+1)
                name = this.name
            }
                break
        }
        this._getData(this.state.selected,name,page)
    }
    //从localstorage中获取data或得到url
    _getData(id,value,page){
        let URL
        value = value || storeName.book.name
        page = (page === undefined) ? storeName.book.page :page
        let count = page*20
        switch (id){
            case 1:
            {
                URL = 'https://api.douban.com/v2/book/search?q='+ value+'&start='+count
            }
                break
        }
        if (URL !== undefined) {
            this._fetchAndStore(id,URL,value,page)
        }
    }
    //拉取数据并序列化后存入本地
    _fetchAndStore(id,url,value,page) {
        let self = this
        storeName.book.name = value
        storeName.book.page = page
        fetchJsonp(url)
            .then(function (response) {
                return response.json()
            }).then(function (json) {
            switch (id){
                case 1 :{
                    self.setState({
                        selected : id,
                        books : {
                            data : json.books,
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
        if (this.state.books && this.state.books.data.length == 0)
            return(
                <div>
                    <Header onPassSearch={this._getSearch.bind(this)}/>
                    <div style={{textAlign :'center',margin : '20px'}}>暂无更多数据!</div>
                    <Footer tabid="1"/>
                </div>
            )
        else {
            return (
                <div>
                    <Header onPassSearch={this._getSearch.bind(this)}/>
                    <Main selected={this.state}/>
                    <LoadMore isLoad={this._getPage.bind(this)}/>
                    <Footer tabid="1"/>
                </div>
            )
        }
    }
}

export default Book
