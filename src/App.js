import { useEffect, useState } from 'react';
import './App.css';

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
      .then(products => console.log(products))
  },[])
  return (
    <>
      
    </>
  );
}

export default App;
