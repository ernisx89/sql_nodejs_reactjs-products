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
  
  // renderProduct = ({ product_id, title }) => {
  //   return ( <div key={product_id}>
  //     <Link to={`/products/${product_id}`}>
  //       {title}
  //     </Link>
  //   </div>
  //   )
  // }

  renderCategory = ({ category, title }) => 
    <div key={category}>
      {category}{'. '}{title}
    </div>

  filter(e) {
    this.setState({filter: e.target.value})
  }

  render() {
    //console.log(this.state);
    const { products } = this.state;
    let items = this.state.products
    if(this.state.filter) {
      items = items.filter((item) => {
        return item.title == "product02"
      }
      )
    }
    return (
      <div>
        <div>
          <input type="text" onChange={this.filter.bind(this)} />
          {items.map((item, i) =>
          <Link to={`/products/${i}`}>
           <p key={i}>{item.title}</p></Link>)
          }
        </div>
        <div>
          {/* {products.map(this.renderProduct.bind(this))} */}
        </div>
        <div>
          {products.map(this.renderCategory.bind(this))}
        </div>
      </div>
    )
  }
}

export default Products