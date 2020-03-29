import React, { Fragment } from 'react'
import Picture from '../image/picture.jpg'

export default ({ match, product_id, title, category }) => 
//console.log(match) 
<Fragment>
  <div>
    <div>
      <img src={Picture} alt="foto" width="100px" />
    </div>
    <div>Product Title: {title}</div>
    <div>Product Category: {category}</div> 
  </div>
  
</Fragment>

// ({ match, product_id, title, category })