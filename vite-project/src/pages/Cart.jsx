import  { useContext } from "react";
import ProductsContext from "../contexts/ProductsContext";

function Cart() {
  const { cart ,RemovefromCart } = useContext(ProductsContext);

  return (
   
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 justify-center items-cente mx-auto bg-slate-100 pt-12">
    { (cart == "" ? <div className=" font-bold text-3xl text-center lg:w-[90vw] justify-center"><h1 >Empty...</h1></div> :
       cart.map((product) => (
        <div
          key={product.id}
          className=" bg-gray-400 overflow-hidden rounded-lg w-[80vw] lg:w-[25vw] cursor-pointer mb-10  mx-auto"
        >
          <img
            className="hover:scale-105 cursor-pointer overflow-hidden transition-all max-h-44 w-full "
            src={product.thumbnail}
            alt=""
          />
          <div className=" p-2">
            <h3 className=" font-bold">{product.title}</h3>

            <p> {product.description}</p>
            <div className=" flex justify-between items-center">
              <span className="font-bold text-xl">
                Price : ${product.price}
              </span>
              <button
                onClick={() => RemovefromCart(product)}
                className=" cursor-pointer hover:bg-white hover:text-black  bg-gray-500 text-white px-2 py-1 rounded-md float-right m-1"
              >
               Remove
              </button>
            </div>
          </div>
        </div>
      ))
    )}
  </div>

  );
}

export default Cart;
