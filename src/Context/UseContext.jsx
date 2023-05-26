import React, { Children, useContext, useState } from 'react'
import HomeProductsList from '../Components/HomeProductsList';
import CartProductsList from '../Components/CartProductsList';
import { DataContext } from './MainContext';
import ProductsListHandle from '../Components/ProductsListHandle';
import data from '../Global/data.json'

function UseContext({ children }) {

    const [dataForCart, setDataForCart] = useState([])
    const dataForHome = data
    const updateProductQuantity = (index, updateQty) => {
        dataForHome[index].quantity += updateQty;

        const currentProduct = dataForCart.findIndex(
            (product) => product.name === dataForHome[index].productname
        );

        if (currentProduct !== -1) {
            const updatedData = [...dataForCart];
            updatedData[currentProduct].quantity += updateQty;

            if (updatedData[currentProduct].quantity === -1) {
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

    return (
        <DataContext.Provider value={{ sample: 'text', updateProductQuantity, handleProductIncrement, handleProductDecrement, dataForHome, dataForCart }}>
            {children}
        </DataContext.Provider>


    )
}

export default UseContext