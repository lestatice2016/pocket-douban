import React, { Component } from 'react'

class LoadMore extends Component{
    constructor(){
        super()
        this.mySelf = React.createRef()
    }
    render(){
        return(
            <div ref={this.mySelf}></div>
        )
    }
    componentDidMount () {
        const listWrap = this.mySelf.current.previousElementSibling
        listWrap.addEventListener('scroll', (event) => {
            let self = this
            const scrollHeight = listWrap.scrollHeight
            const scrollTop = listWrap.scrollTop
            const clientHeight = listWrap.clientHeight
            if (scrollHeight - scrollTop === clientHeight)
            {
                setTimeout(self.props.isLoad(),100)
            }else {
                console.log('no')
            }
        },false)
    }
}

export default LoadMore
