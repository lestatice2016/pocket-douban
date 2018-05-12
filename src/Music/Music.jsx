import React, { Component } from 'react'
import fetchJsonp from 'fetch-jsonp'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import storeName from '../config'

class Music extends Component{
    constructor() {
        super()
        this.state = {
            selected : 3,
            musics : []
        }
    }
    componentWillMount(){
        this._getData(this.state.selected)
    }
    _getSearch(value){
        this._getData(3,value)
    }
    _getData(id,value){
        let URL
        value = value || storeName.music
        switch (id){
            case 3:
                URL = 'https://api.douban.com/v2/music/search?q='+ value
                break
        }
        if (URL !== undefined) {
            this._fetchAndStore(id,URL,value)
        }
    }
    _fetchAndStore(id,url,value) {
        let self = this
        storeName.music = value
        fetchJsonp(url)
            .then(function (response) {
                return response.json()
            }).then(function (json) {
            switch (id){
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
    render(){
        return(
            <div>
                <Header onPassSearch={this._getSearch.bind(this)} />
                <Main selected={this.state}/>
                <Footer tabid="3" />
            </div>
        )
    }
}

export default Music
