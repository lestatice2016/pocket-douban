import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './DetailsBook.css'

class DetailsBook extends Component{
    render(){
        //将其他组件设为不可见
        if(document.querySelector('.tab-container') ) {
            document.querySelector('.tab-container').style.visibility='hidden'
        }
        let item =this.props.location.state
        let oldUrl = item.image
        let newUrl = 'https://images.weserv.nl/?url='+ oldUrl.substring(7)
        return(
            <div className="details-book">
                <div className="top-bar">
                    <Link to='/books'><i className="back">图书</i></Link>
                    <span className="top-title">{item.title}</span>
                </div>
                <div className="intro-bar">
                    <div className="intro-icon">
                        <img src={newUrl} alt="book" className="icon"/>
                    </div>
                    <div className="intro-text">
                        <p className="title">名称 : {item.title}</p>
                        <p className="authors">作者 :
                            <span> {item.author.length >1 ? item.author.join(','):item.author[0]}</span>
                        </p>
                        <p>出版社 : {item.publisher}</p>
                        <p>时间 : {item.pubdate}</p>
                        <p>评分 : {item.rating.average}</p>
                        <p>售价 : {item.price}</p>
                        <p className="tags">{
                            item.tags.slice(0,3).map((item,index) => {
                                return(
                                    <span key={index} className="tag">{item.title}</span>
                                )
                            })
                        }</p>
                    </div>
                </div>
                <p className="mark">序言</p>
                <p className="mark-text">{item.catalog}</p>
                <p className="mark">简介</p>
                <p className="mark-text">{item.summary}</p>
            </div>
        )
    }
}

export default DetailsBook
