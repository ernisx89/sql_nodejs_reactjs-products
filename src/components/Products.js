import React, { Component } from 'react'
import { Link }  from 'react-router-dom'
import Pagination from './Pagination'

class Products extends Component {
  constructor(props) {
    super(props) 
    this.state = {
      products: [], //allCountries: []
      currentProducts: [], //currentCountries
      currentPage: null, 
      totalPages: null
    }
  }
  
  componentDidMount() {
    this.getProducts()
  }

  onPageChanged = data => {
    const { products } = this.state
    const { currentPage, totalPages, pageLimit } = data

    const offset = (currentPage - 1) * pageLimit
    const currentProducts = products.slice(offset, offset + pageLimit)

    this.setState({ currentPage, currentProducts, totalPages })
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
    const { products, currentProducts, currentPage, totalPages  } = this.state
    const totalProducts = products.length
    if (totalProducts === 0) return null
    const headerClass = ['text-dark py-2 pr-4 m-0', currentPage ? 'border-gray border-right' : ''].join(' ').trim()

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
          <div>
            <h2 className={headerClass}>
              <strong className="text-secondary">{totalProducts}</strong> Products 
            </h2>
            { currentPage && (
              <span className="current-page d-inline-block h-100 pl-4 text-secondary">
                Page <span className="font-weight-bold">{ currentPage }</span> / <span className="font-weight-bold">{ totalPages }</span>
              </span>
            ) }
            </div>
            <div className="d-flex flex-row py-4 align-items-center">
              <Pagination totalRecords={totalProducts} pageLimit={9} pageNeighbours={1} onPageChanged={this.onPageChanged} />
            </div>
            { currentProducts.map(product => <p key={product.title}> {product.title} </p>) }
          <div>
        </div>
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