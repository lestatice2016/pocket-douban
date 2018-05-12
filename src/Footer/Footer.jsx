import React, { Component } from 'react'
import './Footer.css'
import {Link} from 'react-router-dom'

class Footer extends Component{
    render(){
        let id = this.props.tabid
        if (id == 1) {
            return (
                <footer className="tab-container">
                    <Link to='/books'>
                        <div className="tab-item tab-books select-books">
                            <i className="tab-icon icon-book"></i>
                            <p className="tab-text text-book">图书</p>
                        </div>
                    </Link>
                    <Link to='/movies'>
                        <div className="tab-item tab-movies ">
                            <i className="tab-icon icon-movie"></i>
                            <p className="tab-text text-movie">电影</p>
                        </div>
                    </Link>
                    <Link to='/musics'>
                        <div className="tab-item tab-musics">
                            <i className="tab-icon icon-music"></i>
                            <p className="tab-text text-music">音乐</p>
                        </div>
                    </Link>
                </footer>
            )}else if(id == 2){
            return(
                    <footer className="tab-container">
                        <Link to='/books'>
                            <div className="tab-item tab-books" >
                                <i className="tab-icon icon-book"></i>
                                <p className="tab-text text-book">图书</p>
                            </div>
                        </Link>
                        <Link to='/movies'>
                            <div className="tab-item tab-movies select-movies" >
                                <i className="tab-icon icon-movie"></i>
                                <p className="tab-text text-movie">电影</p>
                            </div>
                        </Link>
                        <Link to='/musics'>
                            <div className="tab-item tab-musics" >
                                <i className="tab-icon icon-music"></i>
                                <p className="tab-text text-music">音乐</p>
                            </div>
                        </Link>
                    </footer>
            )}else if (id == 3){
            return(
                <footer className="tab-container">
                    <Link to='/books'>
                        <div className="tab-item tab-books" >
                            <i className="tab-icon icon-book"></i>
                            <p className="tab-text text-book">图书</p>
                        </div>
                    </Link>
                    <Link to='/movies'>
                        <div className="tab-item tab-movies " >
                            <i className="tab-icon icon-movie"></i>
                            <p className="tab-text text-movie">电影</p>
                        </div>
                    </Link>
                    <Link to='/musics'>
                        <div className="tab-item tab-musics select-musics" >
                            <i className="tab-icon icon-music"></i>
                            <p className="tab-text text-music">音乐</p>
                        </div>
                    </Link>
                </footer>
            )}
        }
}

export default Footer
