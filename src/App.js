import React, { Component } from 'react'
import './App.css'
//import 'node-sass'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import Products from './components/Products'

import Navbar from './components/NavBar'
import Landing from './components/Landing'
import Login from './components/Login'
import Register from './components/Register'

//import ProductView from'./components/ProductView'
import ProductDetail from './components/ProductDetail'
import ProductsInfo from './components/ProductsInfo'

class App extends Component {
  state = {
    productsInfo: []
  }

  componentDidMount() {
    this.getProducts()
  }

  getProducts = _ => {
    //gets from node js endpoint
    fetch('http://localhost:4000/products')
    .then(response => response.json())
    .then(response => this.setState({ productsInfo: response.data}))
    .catch(err => console.log(err))
  }

  render() {
   const { productsInfo } = this.state
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
           
            <Route exact path="/products" component={Products} />
            <Route exact path="/productsInfo" render={
              props => <ProductsInfo {...props} productsInfo={productsInfo}/>
            } />
            <Route path="/productsInfo/:productId" render={
              props => <ProductDetail {...props}/>} 
            />
           
          </div>
        </div>
      </Router>
    )
  }
}

export default App
