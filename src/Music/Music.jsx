import React, { Component } from 'react'
import fetchJsonp from 'fetch-jsonp'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import storeName from '../config'
import LoadMore from '../LoadMore'

class Music extends Component{
    constructor() {
        super()
        this.state = {
            selected : 3,
            musics :{
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
        this._getData(3,value,0)
    }
    _getPage(){
        let page,name
        switch (this.state.selected){
            case 3: {
                page = (this.state.musics.page+1)
                name = this.name
            }
                break
        }
        this._getData(this.state.selected,name,page)
    }
    _getData(id,value,page){
        let URL
        value = value || storeName.music.name
        page = (page === undefined) ? storeName.music.page :page
        let count = page*20
        switch (id){
            case 3:
                URL = 'https://api.douban.com/v2/music/search?q='+value+'&start='+count
                break
        }
        if (URL !== undefined) {
            this._fetchAndStore(id,URL,value,page)
        }
    }
    _fetchAndStore(id,url,value,page) {
        let self = this
        storeName.music.name = value
        storeName.music.page = page
        fetchJsonp(url)
            .then(function (response) {
                return response.json()
            }).then(function (json) {
            switch (id){
                case 3 :{
                    self.setState({
                        selected : id,
                        musics : {
                            data : json.musics,
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
        if (this.state.musics && this.state.musics.data.length == 0)
            return(
                <div>
                    <Header onPassSearch={this._getSearch.bind(this)}/>
                    <div style={{textAlign :'center',margin : '20px'}}>暂无更多数据!</div>
                    <Footer tabid="3"/>
                </div>
            )
        else {
            return (
                <div>
                    <Header onPassSearch={this._getSearch.bind(this)}/>
                    <Main selected={this.state}/>
                    <LoadMore isLoad={this._getPage.bind(this)}/>
                    <Footer tabid="3"/>
                </div>
            )
        }
    }
}

export default Music
