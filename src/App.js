import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar'
import Home from './components/Home';
import Cart from './components/Cart'
import Saved from './components/Saved';
import Item from './components/Item';

function App() 
{

  //Delcaring the states to be used in this project
  const [cart, setCart]=useState([])
  const [products, setProducts]= useState([])
  const [savedItems, setSavedItems]=useState([])

  useEffect(()=>
  {
    fetch("https://phase-2-ecommerce-project-api.onrender.com/products")
      .then(response => response.json())
      .then(products => setProducts(products))
  },[])
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home products={products}/>}></Route>
        <Route path='/cart' element={<Cart cart={cart}/>}></Route>
        <Route path='/saved' element={<Saved savedItems={savedItems}/>}></Route>
        <Route path='/:id' element={<Item products={products}/>}></Route>
      </Routes>
    </>
  );
}

export default App;
