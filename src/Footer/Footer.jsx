import React, { Component } from 'react'
import './Footer.css'

class Footer extends Component{

    constructor() {
        super()
        this.state ={
            selected : '.tab-movies'
        }
    }

    handleClick(event){
        let name = event.target.className
        let _getSelect = this.props.onPassId
        let id
        if (name.includes('book')){
            id = 1
            if (!this.state.selected.includes('books')){
                document.querySelector(this.state.selected).classList.remove('select'+this.state.selected.substring(4))
                document.querySelector('.tab-books').classList.add('select-books')
                this.setState({
                    selected: '.tab-books'
                })
            }
        } else if (name.includes('movie')){
            id = 2
            if (!this.state.selected.includes('movies')){
                document.querySelector(''+this.state.selected).classList.remove('select'+this.state.selected.substring(4))
                document.querySelector('.tab-movies').classList.add('select-movies')
                this.setState({
                    selected: '.tab-movies'
                })
            }
        } else if(name.includes('music')){
            id = 3
            if (!this.state.selected.includes('musics')){
                document.querySelector(''+this.state.selected).classList.remove('select'+this.state.selected.substring(4))
                document.querySelector('.tab-musics').classList.add('select-musics')
                this.setState({
                    selected: '.tab-musics'
                })
            }
        }
        _getSelect(id)
    }

    render(){
        return(
            <footer className="tab-container">
                <div className="tab-item tab-books" onClick={this.handleClick.bind(this)}>
                    <i className="tab-icon icon-book"></i>
                    <p className="tab-text text-book">图书</p>
                </div>
                <div className="tab-item tab-movies select-movies" onClick={this.handleClick.bind(this)}>
                    <i className="tab-icon icon-movie"></i>
                    <p className="tab-text text-movie">电影</p>
                </div>
                <div className="tab-item tab-musics" onClick={this.handleClick.bind(this)}>
                    <i className="tab-icon icon-music"></i>
                    <p className="tab-text text-music">音乐</p>
                </div>
            </footer>
        )
    }
}

export default Footer