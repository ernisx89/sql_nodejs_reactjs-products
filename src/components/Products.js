import React, { Component } from 'react'
import { Link }  from 'react-router-dom'

class Products extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      products: []
    }
  }
  
  componentDidMount() {
    this.getProducts()
  }

  getProducts = _ => {
    //gets from node js endpoint
    fetch('http://localhost:4000/products')
    .then(response => response.json())
    .then(response => this.setState({ products: response.data}))
    .catch(err => console.log(err))
  }

  renderProduct = ({ product_id, title }) => {
    return ( <div key={product_id}>
      
        <Link to={`/products/${product_id}`}>
        {product_id + 1}{'. '}{title}
        </Link>
      
    </div>
    )
  }
   

  renderCategory = ({ category, title }) => 
    <div key={category}>
      {category}{'. '}{title}
    </div>

  render() {
    console.log(this.state);
    const { products } = this.state;
    return (
      <div>
        <div className="App">
          {products.map(this.renderProduct.bind(this))}
        </div>
        <div>
          {products.map(this.renderCategory.bind(this))}
        </div>
      </div>
    )
  }
}

export default Products