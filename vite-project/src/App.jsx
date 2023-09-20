// import React from 'react'
import { useState} from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import ProductsContext from "./contexts/ProductsContext"


import Navbar from "./components/Navbar"
import Home from "./pages/Home"
import Cart from "./pages/Cart"


function App() {
  const [products, setProducts] = useState([]);

  const [cart, setCart] = useState("")

  const AddtoCart = (product)=>{
      setCart([...cart,product])
     

  }

  const RemovefromCart =(product)=>{
    const newCart = cart.filter((item)=> item.id !== product.id)
    setCart(newCart)



  }

  return (
    <>
<ProductsContext.Provider value={{products,setProducts ,AddtoCart ,cart, setCart ,RemovefromCart}}>
<BrowserRouter>
<Navbar setProducts = { setProducts}/>
  <Routes>
    <Route path="/" element={ <Home />}/>
    <Route path="/Cart" element={<Cart/>} />
  </Routes>
</BrowserRouter>
    
    </ProductsContext.Provider>
    
    </>
  )
}

export default App
