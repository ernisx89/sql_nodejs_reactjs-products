import React, { Fragment } from 'react'

export default ({ match, product_id, title, category }) => 
//console.log(match) 
<Fragment>
  <div>
    <div>Product Title: {title}</div>
    <div>Product Category: {category}</div> 
  </div>
  
</Fragment>

// ({ match, product_id, title, category })