import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './DetailsMovie.css'

class DetailsMovie extends Component{
    render(){
        //将其他组件设为不可见
        document.querySelector('.tab-container').style.visibility='hidden'
        document.querySelector('.list').style.display = 'none'
        let item =this.props.location.state
        let oldUrl = item.images.medium
        let newUrl = 'https://images.weserv.nl/?url='+ oldUrl.substring(7)
        return(
            <div className="details-movie">
                <div className="top-bar">
                    <Link to='/'><i className="back">电影</i></Link>
                    <span className="top-title">{item.title}</span>
                </div>
                <div className="item-icon">
                    <img src={newUrl} alt="movie" className="icon"/>
                </div>
                <p className="mark">简介</p>
                 <div className="item-text">
                     <p className="title">名称 : {item.title} {
                         item.genres.slice(0,3).map((item,index) => {
                             return(
                                 <span key={index} className="tag">{item}</span>
                             )
                         })
                     }</p>
                     <p>上映时间 : {item.year}</p>
                     <p>导演 : {
                         item.directors.slice(0,3).map((item,index) => {
                             return(
                                 <span key={index} className="director">{item.name}</span>
                             )
                         })
                     }</p>
                 </div>
                <p className="mark">演员</p>
                <div className="actors">
                    {
                        item.casts.slice(0,3).map((item,index) => {
                            return(
                                <div className="actor-item" key={index}>
                                    <img className="actor-icon" src={ item.avatars == null ? 'https://images.weserv.nl/?url='+'https://img1.doubanio.com/view/subject/s/public/s4705619.jpg'.substring(7) : 'https://images.weserv.nl/?url='+item.avatars.medium.substring(7)} alt="暂无图片"/>
                                    <span>{item.name}</span>
                                </div>
                            )
                        })
                    }
                </div>
             </div>
        )
    }
}

export default DetailsMovie