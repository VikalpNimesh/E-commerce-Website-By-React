import { useEffect,useState,useContext } from "react";
import {BarLoader, PulseLoader} from "react-spinners"
import ProductsContext from "../contexts/ProductsContext";


function Home() {

  const [loader, setLoader] = useState(true)
 const {products,setProducts} = useContext(ProductsContext)

  
  useEffect(() => {
    getallProducts();
  }, []);

  const getallProducts = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProducts(data.products);
    setLoader(false)
  }

    return (
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 justify-center items-cente mx-auto bg-slate-100 pt-12">

       
        {loader ? <div className=" w-full flex justify-center items-center mx-auto w-[80vw] h-[70vh]"> <PulseLoader className=" justify-center" color="#36d7b7" /></div> :products.map((product) => (

            <div key={product.id} className=" bg-gray-400 overflow-hidden rounded-lg w-[80vw] lg:w-[25vw] cursor-pointer mb-10  mx-auto">
                <img
                    className="hover:scale-105 cursor-pointer overflow-hidden transition-all max-h-44 w-full "
                    src={product.thumbnail}
                    alt="" />
                <div className=" p-2">
                    <h3 className=" font-bold">{product.title}</h3>

                    <p> {product.description}</p>
                    <div className=" flex justify-between items-center">
                        <span className="font-bold text-xl">Price : ${product.price}</span>
                        <button className=" cursor-pointer hover:bg-white hover:text-black  bg-gray-500 text-white px-2 py-1 rounded-md float-right m-1">
                            Add To Cart
                        </button>
                    </div>
                </div>
            </div>
        ) 
            )
        }
      </div>
    );
  }


export default Home;
