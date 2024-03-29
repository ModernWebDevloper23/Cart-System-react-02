import React from "react";
import Productitem from "./Productitem";
import { useProduct } from "../Context/productContext";

function ProductHolder() {
  const { products, addToCart } = useProduct();
  return (
    <>
      <div className="w-[60vw] relative h-[75vh] px-4 py-4 flex flex-wrap rounded-[30px] gap-[20px] bg-stone-500">
        {products.map((product) => {
          return <Productitem key={product.id} product={product} />;
        })}
        <button
          onClick={() => {
            addToCart();
          }}
          className="w-[35%] shadow-3xl   absolute bottom-[20px] right-[2.5%] flex h-[8vh] items-center justify-center py-1 rounded-[30px] bg-stone-900 text-stone-200"
        >
          <h1 className="text-2xl h-[5vh]">Add to cart🛒</h1>
        </button>
      </div>
    </>
  );
}

export default ProductHolder;
