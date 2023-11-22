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
  //Declaring the states to be used in this project
  const [products, setProducts]=useState([])
  const [cart, setCart]=useState([])
  const [savedItems, setSavedItems]=useState([])
  const [itemNo, setItemNo]=useState(1)
  const [cartCount, setCartCount]=useState(0)
  const [savedItemsCount, setSavedItemsCount]=useState(0)

  //Fetching products from the API
  useEffect(()=>
  {
    fetch("https://phase-2-ecommerce-project-api.onrender.com/products")
      .then(response => response.json())
      .then(products => setProducts(products))
  },[])

  //Fetching savedItems from the API
  useEffect(()=>
  {
    fetch("https://phase-2-ecommerce-project-api.onrender.com/savedItems")
      .then(response => response.json())
      .then(savedItems => setSavedItems(savedItems))
  },[])

  //Fetching cartItems from the API
  useEffect(()=>
  {
    fetch("https://phase-2-ecommerce-project-api.onrender.com/cart")
      .then(response => response.json())
      .then(savedItems => setCart(savedItems))
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
