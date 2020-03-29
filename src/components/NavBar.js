import React, { Component } from 'react'
import { Link, withRouter } from 'react-router-dom'

class Landing extends Component {
  logOut(e) {
    e.preventDefault()
    localStorage.removeItem('usertoken')
    this.props.history.push(`/`)
  }

  render() {
    const loginRegLink = (
      <ul style={{listStyleType: "none"}}>
        <li>
          <Link to="/login">
            Login
          </Link>
        </li>
        <li >
          <Link to="/register" >
            Register
          </Link>
        </li>
      </ul>
    )

    const userLink = (
      <ul >
        <li >
         User Logged 
        </li>
        <li >
          <a href="" onClick={this.logOut.bind(this)}>
            Logout
          </a>
        </li>
      </ul>
    )

    return (
      <nav >
        <div>
          <ul >
            <li >
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
          </ul>
          {localStorage.usertoken ? userLink : loginRegLink}
        </div>
        <p>
          <Link to="/productsInfo">Products Info</Link>
        </p>
        <p>
          <Link to="/products">Products - Categories</Link>
        </p>
      </nav>
    )
  }
}

export default withRouter(Landing)