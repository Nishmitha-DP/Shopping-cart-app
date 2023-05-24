import React from 'react'
import './../App.css'
import Button from './Button'
import CartSummary from './CartSummary'

function CartProductsList({dataForCart,handleProductDecrement,handleProductIncrement}) {
    // console.log(dataForCart)
    return <div className='carts'>
        <div className='cart-data'>
            <div className="cart-list">
                {
                    dataForCart.filter(item => item.quantity > 0).map((product, index) =>
                        <div className="cart-items" key={index}>
                            <p>{product.name}</p>
                            {/* <p>{product.quantity}</p> */}
                            <p>
                                < Button onClick={() => handleProductDecrement(index)} value={'-'} />
                                {product.quantity}
                                < Button onClick={() => handleProductIncrement(index)} value={'+'} />
                            </p>

                        </div>
                    )
                }
            </div>
        </div>
        <CartSummary dataForCart={dataForCart} />

    </div>
}

export default CartProductsList


