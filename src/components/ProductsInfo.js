import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'

export default ({ productsInfo }) => 

<Fragment>
  <p>
    fddgfg
    {productsInfo.map(({ product_id, title }) => 
      <li key={product_id}>
        <Link to={`productsInfo/${product_id}`}>{title}</Link>
      </li>
      )}
  </p>
  
</Fragment>

