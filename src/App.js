import React, { Component } from 'react'
import './App.css'
//import 'node-sass'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Products from './components/Products'

import Navbar from './components/NavBar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/products" component={Products} />
          </div>
        </div>
      </Router>
    )
  }
}

export default App
