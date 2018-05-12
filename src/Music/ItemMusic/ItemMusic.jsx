import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './ItemMusic.css'

class ItemMusic extends Component{
    constructor() {
        super();
        this.state = {
            title:'',
            author:[],
            score:''
        }
    }
    render(){
        if(document.querySelector('.tab-container')  ) {
            document.querySelector('.tab-container').style.visibility = 'visible'
        }
        let data = this.props.data
        let oldUrl = data.image
        let newUrl = 'https://images.weserv.nl/?url='+ oldUrl.substring(7)
        let authors = data.author ? data.author : ['bigbang']
        let path = {
            pathname:'/details/music',
            state:data,
        }
        return(
            <Link to={path}>
            <li className="item-music">
                <div className="item-icon">
                    <img src={newUrl} alt="music" className="icon"/>
                </div>
                <div className="item-text">
                    <p className="title">名称 : {data.title}</p>
                    <p>歌手 : {
                        authors.slice(0,5).map((item,index) => {
                            return(
                                <span key={index} className="author">{item.name}</span>
                            )
                        })
                    }</p>
                    <p>评分 : {data.rating.average}</p>
                </div>
            </li>
            </Link>
        )
    }
}

export default ItemMusic
