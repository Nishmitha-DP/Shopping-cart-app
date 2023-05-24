import React, { useEffect, useState } from 'react'
import './../App.css'

function CartSummary({ dataForCart }) {

  return <div>
    <h3>Summary</h3>
    {
      dataForCart.filter(product => product.quantity > 0).map((product, index) =>
        <div key={index} >
          <ol>
            <p>{product.name} * {product.quantity} = ${product.price * product.quantity}</p>

          </ol>
        </div>
      )
    }

    <p><b>Total: </b> {dataForCart.reduce((accumulator, currentValue) => accumulator + (currentValue.quantity * currentValue.price), 0)}</p>

  </div>
}

export default CartSummary