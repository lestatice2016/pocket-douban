import React, { Component } from 'react'
import './Header.css'

class Header extends Component{

    handleKeyUp(event){
        let value = document.querySelector('.input').value
        if (value && value !== ' ')
            this.props.onPassSearch(value)
    }

    render(){
        return (
            <header className="search">
                <input className="input" type="text" />
                <button className="btn" onClick={this.handleKeyUp.bind(this)}>搜索</button>
            </header>
        )
    };
}

export default Header