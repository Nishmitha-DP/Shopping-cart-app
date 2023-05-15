import React from 'react'
import products from './products.json';
import Buttons from './Buttons';

function ShoppingProducts() {
  // const products2=[...products]
  return (
    <div>
      {
        products.map(product =>
          <div key={product.id}>
            <p>{product.productname}</p>
            <p>{product.price}</p>

            {/* if(!product.added) */}
            <Buttons />


          </div>
        )
      }
      {/* {console.log(products)} */}
    </div>
  )
}

export default ShoppingProducts