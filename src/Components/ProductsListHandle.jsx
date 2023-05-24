import React, { useState } from 'react'
import data from '../Global/data.json'
import './../App.css'
import HomeProductsList from './HomeProductsList'
import CartProductsList from './CartProductsList'

function ProductsListHandle() {

    const [location, setLocation] = useState(0)
    const [dataForCart, setDataForCart] = useState([])

    const dataForHome = data
    // const [quantity, setQuantity] = useState(Array(data.length).fill(0));

    const updateProductQuantity = (index, updateQty) => {
        dataForHome[index].quantity += updateQty;

        const currentProduct = dataForCart.findIndex(
            (product) => product.name === dataForHome[index].productname
        );

        if (currentProduct !== -1) {
            const updatedData = [...dataForCart];
            updatedData[currentProduct].quantity += updateQty;

            if (updatedData[currentProduct].quantity === -1) {
                // console.log("removing: ", dataForHome[index].productname);
                updatedData.splice(currentProduct, 1);
            }
            setDataForCart(updatedData);

        } else {
            setDataForCart((prevData) => [
                ...prevData,
                {
                    name: dataForHome[index].productname,
                    price: dataForHome[index].price,
                    quantity: dataForHome[index].quantity,
                },
            ]);
        }
    };

    const handleProductIncrement = (index) => {
        updateProductQuantity(index, 1);
    };

    const handleProductDecrement = (index) => {
        updateProductQuantity(index, -1);
    };



    const handleCartClick = () => {
        setLocation(1)
    }


    const handleHomeClick = () => {
        setLocation(0)
    }


    return (
        <div>
            <div className='navigation'>
                <a className='links' onClick={handleHomeClick} href='#'> Home </a>
                <a className='links' onClick={handleCartClick} href='#'> Cart </a>

            </div>
            {
                location ?
                    <CartProductsList dataForCart={dataForCart} handleProductDecrement={handleProductDecrement} handleProductIncrement={handleProductIncrement} /> :
                    <HomeProductsList dataForHome={[...dataForHome]} dataForCart={[dataForCart]} handleProductIncrement={handleProductIncrement} handleProductDecrement={handleProductDecrement} />
            }

        </div>
    )
}

export default ProductsListHandle