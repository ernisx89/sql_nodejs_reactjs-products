import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    products: []
  }

  componentDidMount() {
    this.getProducts();
  }

  getProducts = _ => {
    //gets from node js endpoint
    fetch('http://localhost:4000/products')
    .then(response => response.json())
    .then(response => this.setState({ products: response.data}))
    .catch(err => console.log(err));
  }

  renderProduct = ({ product_id, title }) => <div key={product_id}>
   {product_id + 1}{'. '}{title}
  </div>

  render() {
    //console.log(this.state);
    const { products } = this.state;
    return (
      <div className="App">
        {products.map(this.renderProduct)}
      </div>
    );
  }
}

export default App;
