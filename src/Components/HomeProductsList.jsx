import React, { useState } from 'react'
import Button from './Button'
import './../App.css'

function HomeProductsList({ dataForHome, handleProductDecrement, handleProductIncrement }) {


    console.log(dataForHome)
    return (
        <div>
            {console.log(dataForHome)}
            <div className='products'>
                {
                    dataForHome.map((product, index) =>
                        <div className="product-items" key={index}>
                            <p>{product.productname}</p>
                            <p>${product.price}</p>
                            {
                                // quantity[index] === 0 ?
                                product.quantity === 0 ?
                                    < Button onClick={() => handleProductIncrement(index)} value={'add to cart'} /> :
                                    <p>
                                        < Button onClick={() => handleProductDecrement(index)} value={'-'} />
                                        {/* {quantity[index]} */}
                                        {product.quantity}
                                        < Button onClick={() => handleProductIncrement(index)} value={'+'} />
                                    </p>
                            }
                           
                        </div>
                    )
                }

            </div><br /><br />

        </div>
    )
}

export default HomeProductsList

