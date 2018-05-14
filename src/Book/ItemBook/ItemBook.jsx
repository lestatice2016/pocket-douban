import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import './ItemBook.css'

class ItemBook extends Component{

    render(){
        //点击返回键后,将其他组件设为默认可见值
        if(document.querySelector('.tab-container')) {
            document.querySelector('.tab-container').style.visibility = 'visible'
        }
        if (document.querySelector('.main'))
            document.querySelector('.main').scrollTop = 0
        let data = this.props.data;
        let oldUrl = data.image;
        //将图片缓存,不然就无法获取图片,出现403
        let newUrl = 'https://images.weserv.nl/?url='+ oldUrl.substring(7)
        let path = {
            pathname:'/details/book',
            state:data,
        }
        return(
            <Link to={path}>
                <li className="item-book">
                    <div className="item-icon">
                        <img src={newUrl} alt="book" className="icon"/>
                    </div>
                    <div className="item-text">
                        <p className="title">名称 : {data.title}</p>
                        <p className="tags">{
                            data.tags.slice(0,3).map((item,index) => {
                            return(
                              <span key={index} className="tag">{item.title}</span>
                            )
                            })
                        }</p>
                        <p className="authors">作者 :
                            <span> {data.author.length >1 ? data.author.join(','):data.author[0]}</span>
                        </p>
                        <p>评分 : {data.rating.average}</p>
                        <p>时间 : {data.pubdate}</p>
                    </div>
                </li>
            </Link>
        )
    }
}

export default ItemBook
