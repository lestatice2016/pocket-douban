import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './DetailsMusic.css'

class DetailsMusic extends Component{
    render(){
        //将其他组件设为不可见
        document.querySelector('.tab-container').style.visibility='hidden'
        document.querySelector('.list').style.display = 'none'
        let item =this.props.location.state
        let oldUrl = item.image
        let newUrl = 'https://images.weserv.nl/?url='+ oldUrl.substring(7)
        let authors = item.author ? item.author : ['bigbang']
        return(
            <div className="details-music">
                <div className="top-bar">
                    <Link to='/'><i className="back">音乐</i></Link>
                    <span className="top-title">{item.title}</span>
                </div>
                <div className="intro-bar">
                    <div className="intro-icon">
                        <img src={newUrl} alt="music" className="icon"/>
                    </div>
                    <div className="intro-text">
                        <p className="title">名称 : {item.title}</p>
                        <p className="authors">歌手 : {
                            authors.slice(0,5).map((item,index) => {
                                return(
                                    <span key={index} className="author">{item.name}</span>
                                )
                            })
                        }</p>
                        <p>发布商 : {item.attrs.publisher}</p>
                        <p>发布时间 : {item.attrs.pubdate}</p>
                        <p>评分 : {item.rating.average}</p>
                        <p className="tags">{
                            item.tags.slice(0,3).map((item,index) => {
                                return(
                                    <span key={index} className="tag">{item.name}</span>
                                )
                            })
                        }</p>
                    </div>
                </div>
                <p className="mark">简介</p>
                <p className="mark-text">{item.title}</p>
            </div>
        )
    }
}

export default DetailsMusic