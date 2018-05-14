import React, { Component } from 'react'
import ItemBook from '../Book/ItemBook/ItemBook'
import ItemMovie from '../Movie/ItemMovie/ItemMovie'
import ItemMusic from '../Music/ItemMusic/ItemMusic'
import './Main.css'

class Main extends Component{
    render(){
        let datas = this.props.selected
        let id = datas.selected
        //重复setSTATE了,渲染只会从render()开始.
        switch (id){
            case 0 :{
                    return(
                        <main className="main">
                            <ul className="list" >
                                {
                                    datas.subjects.data.map((item,index) => {
                                        return(
                                            <ItemMovie key={index} data={item} mark="0" />
                                        )
                                    })
                                }
                            </ul>
                        </main>
                    )
                }
            break
            case 1 : return(
                <main className="main">
                    <ul className="list">
                        {
                            datas.books.data.map((item,index) => {
                                return (
                                    <ItemBook key={index} data={item} />
                                )
                            })
                        }
                    </ul>
                </main>
            )
            break
            case 2 :{
                    return (
                        <main className="main">
                            <ul className="list">
                                {
                                    datas.movies.data.map((item,index) => {
                                        return (
                                            <ItemMovie key={index} data={item} mark="2" />
                                        )
                                    })
                                }
                            </ul>
                        </main>
                    )
            }
            break
            case 3 :return(
                <main className="main">
                    <ul className="list">
                        {
                              datas.musics.data.map((item,index) => {
                                 return(
                                     <ItemMusic key={index} data={item} />
                                 )
                              })
                        }
                    </ul>
                </main>
            )
            break
        }
    }
}

export default Main
