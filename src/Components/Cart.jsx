import React from "react";
import { useProduct } from "../Context/productContext";
import CartItem from "./CartItem";

function Cart() {
  const { addedProducts } = useProduct();
  return (
    <div className="w-1/3 absolute left-[64vw] h-[95vh] bg-stone-700 flex flex-wrap px-4 py-4 rounded-[40px]">
      <div className="w-full h-[8vh] flex items-center justify-center rounded-[30px] bg-stone-200 text-stone-900">
        <h1 className="text-4xl font-serif font-bold">Cart</h1>
      </div>
      {addedProducts.map((product) => {
        return <CartItem key={product.id} product={product} />;
      })}
    </div>
  );
}

export default Cart;
