import React, { Component } from 'react'
import fetchJsonp from 'fetch-jsonp'
import Header from '../Header/Header'
import Main from '../Main/Main'
import Footer from '../Footer/Footer'
import storeName from '../config'

class Home extends Component{
    constructor() {
        super()
        this.state = {
            selected : 0,
            subjects : [],
            movies : []
        }
    }
    componentWillMount(){
        this._getData(this.state.selected)
    }
    _getSearch(value){
        this._getData(2,value)
    }
    componentDidMount(){
        // window.addEventListener('scroll', function (){
        //     console.log('滚动')
        // })
    }
    //从localstorage中获取data或得到url
    _getData(id,value){
        let URL
        let self = this
        value = value || storeName.movie
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
                case 0 :{
                    self.setState({
                        selected : id,
                        subjects : json.subjects
                    })
                    localStorage.setItem('subjects', JSON.stringify(json.subjects));
                }
                    break
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

export default Home
