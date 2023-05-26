import logo from './logo.svg';
import './App.css';
import ProductsListHandle from './Components/ProductsListHandle';
import { useState } from 'react';
import { DataContext } from './Context/MainContext';
import UseContext from './Context/UseContext';

function App() {

  return (
    <div className="App">
      <UseContext>
        <ProductsListHandle />
      </UseContext>
    </div>
  );
}

export default App;