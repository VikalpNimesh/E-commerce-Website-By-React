
import { useState,useContext } from "react";
import {Link} from 'react-router-dom'
import ProductsContext from "../contexts/ProductsContext";


function Navbar() {

  const [search, setSearch] = useState("")
  const {setProducts ,cart} = useContext(ProductsContext)


  const searchProduct = async () => {
    const response = await fetch(`https://dummyjson.com/products/search?q=${search}`)
    const data = await response.json();
    setProducts(data.products);
    // console.log(products);
  }
  return (
    <nav className="flex justify-evenly bg-slate-300 text-center items-center py-3 shadow-lg  ">

        <div >
            <h1 className=" font-extrabold text-2xl">Project</h1>
        </div>
        <div>
        <input placeholder='Enter here ...' onChange={(e)=>{setSearch(e.target.value)}}  type="search" name="" id="" className="outline-none border-2 rounded p-2 w-[45vw]" />
        <button onClick={searchProduct} className=' bg-red-400 rounded-md p-2 ml-5'>Search</button>

        </div>
       
        <div>
            <ul className="flex gap-8 ml-3 font-bold text-xl ">
                <Link to="/" className=" hover:text-blue-900 transition-all hover:scale-110">Home</Link>
                <Link to="/Cart" className=" hover:text-blue-900 transition-all hover:scale-110">Cart {!cart.length ? "" : `(${cart.length})` }</Link>
            </ul>
        </div>

    </nav>
  )
}

export default Navbar

