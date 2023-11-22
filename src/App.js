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

  //Function to add item to saved items
  const addItemToSaved = id =>
  {
    const savedProduct=products.find(product => product.id === parseInt(id))

    //Making a POST request to the server
    fetch("https://phase-2-ecommerce-project-api.onrender.com/savedItems",
    {
      method: "POST",
      headers: 
      {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify(savedProduct)
    })
    .then(setSavedItemsCount(savedItemsCount => savedItemsCount + 1))
    .then(alert("Item has been added to your saved items"))

    //Updating the saved items state
    setSavedItems([...savedItems, savedProduct])
  }

  //Function to remove item from saved items
  const deleteSavedItem = id =>
  {
    //Making the delete request
    fetch(`https://phase-2-ecommerce-project-api.onrender.com/savedItems/${id}`,
    {
      method: "DELETE",
      headers:
      {
        "Content-Type" : "application/json"
      }
    })
    .then(setSavedItemsCount(savedItemsCount => savedItemsCount -1))
    .then(alert("Item removed from saved items"))

    //Updating the state
    const remainingSavedItems=savedItems.filter(savedItem => savedItem.id !== parseInt(id))
    setSavedItems(remainingSavedItems)
  }

  //Function to handle change in the input field for the no of items
  const handleValueChange= e =>
  {
    setItemNo(e.target.value)
  }

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
