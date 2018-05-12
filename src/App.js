import React, { Component } from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './Home/Home'
import Books from './Book/Book'
import Movie from './Movie/Movie'
import Music from './Music/Music'
import DetailsMovie from './Movie/DetailsMovie'
import DetailsBook from './Book/DetailsBook'
import DetailsMusic from './Music/DetailsMusic'

import './App.css'

class App extends Component {

    render() {
        return (
    <BrowserRouter>
      <div className="App">
          <Switch>
              <Route exact path='/' component={Home} />
              <Route path='/books' component={Books} />
              <Route path='/movies' component={Movie} />
              <Route path='/musics' component={Music} />
              <Route path="/details/movie" component={DetailsMovie} />
              <Route path="/details/book" component={DetailsBook} />
              <Route path="/details/music" component={DetailsMusic} />
          </Switch>
      </div>
    </BrowserRouter>
    )
  }
}

export default App
