import React, { useState, useContext } from 'react'
import data from '../Global/data.json'
import './../App.css'
import HomeProductsList from './HomeProductsList'
import CartProductsList from './CartProductsList'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { DataContext } from '../Context/MainContext'


function ProductsListHandle() {

    const { handleProductIncrement } = useContext(DataContext);
    const { handleProductDecrement } = useContext(DataContext);
    const {dataForCart}=useContext(DataContext)
    const {dataForHome}=useContext(DataContext)

    return (
        <div>
            
            <BrowserRouter>
                <div className='navigation'>
                    <Link to='/' className='links'>Home</Link>
                    <Link to='/cart' className='links'>Cart</Link>
                </div>

                <Routes>
                    <Route path='/' element={<HomeProductsList dataForHome={dataForHome} handleProductIncrement={handleProductIncrement} handleProductDecrement={handleProductDecrement} />} />
                    <Route path='/cart' element={<CartProductsList dataForCart={dataForCart} handleProductDecrement={handleProductDecrement} handleProductIncrement={handleProductIncrement} />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default ProductsListHandle