import React, { Component } from 'react'
import './ItemMovie.css'
import {Link} from 'react-router-dom'

class ItemMovie extends Component{
    render(){
        if(document.querySelector('.tab-container') ){
            document.querySelector('.tab-container').style.visibility='visible'
        }
        let data = this.props.data
        let mark = this.props.mark
        data.markMovie = mark
        let oldUrl = data.images.medium
        let newUrl = 'https://images.weserv.nl/?url='+ oldUrl.substring(7)
        let path = {
            pathname:'/details/movie',
            state:data,
        }
        return(
            <Link to={path}>
            <li className="item-movie">
                <div className="item-icon">
                    <img src={newUrl} alt="movie" className="icon"/>
                </div>
                <div className="item-text">
                    <p className="title">{data.title} - {data.year}</p>
                    <p>{
                        data.genres.slice(0,3).map((item,index) => {
                            return(
                                <span key={index} className="tag">{item}</span>
                            )
                        })
                    }</p>
                    <p>{
                        data.casts.slice(0,5).map((item,index) => {
                            return(
                                <span key={index} className="actor">{item.name}</span>
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

export default ItemMovie
