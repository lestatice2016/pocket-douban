import React, { Component } from 'react'
import {Route} from 'react-router-dom'
import ItemBook from '../Item/ItemBook/ItemBook'
import ItemMovie from '../Item/ItemMovie/ItemMovie'
import ItemMusic from '../Item/ItemMusic/ItemMusic'
import DetailsBook from '../Item/ItemBook/DetailsBook'
import DetailsMovie from '../Item/ItemMovie/DetailsMovie'
import DetailsMusic from '../Item/ItemMusic/DetailsMusic'
import './Main.css'

class Main extends Component{
    render(){
        let datas = this.props.selected
        let id = datas.selected
        //重复setSTATE了,渲染只会从render()开始.
        switch (id){
            case 0 :return(
                <main className="main">
                    <ul className="list">
                        {
                            datas.subjects.map((item,index) => {
                                return(
                                    <ItemMovie key={index} data={item} />
                                )
                            })
                        }
                    </ul>
                    <Route path="/details" component={DetailsMovie} />
                </main>
            )
            break
            case 1 : return(
                <main className="main">
                    <ul className="list">
                        {
                            datas.books.map((item,index) => {
                                return (
                                    <ItemBook key={index} data={item} />
                                )
                            })
                        }
                    </ul>
                    <Route path="/details" component={DetailsBook} />
                </main>
            )
            break
            case 2 : return(
                <main className="main">
                    <ul className="list">
                        {
                              datas.movies.map((item,index) => {
                                 return(
                                     <ItemMovie key={index} data={item} />
                                 )
                              })
                        }
                    </ul>
                    <Route path="/details" component={DetailsMovie} />
                </main>
            )
            break
            case 3 :return(
                <main className="main">
                    <ul className="list">
                        {
                              datas.musics.map((item,index) => {
                                 return(
                                     <ItemMusic key={index} data={item} />
                                 )
                              })
                        }
                    </ul>
                    <Route path="/details" component={DetailsMusic} />
                </main>
            )
            break
        }
    }
}

export default Main