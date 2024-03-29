import React from "react";
import { useProduct } from "../Context/productContext";

function CartItem({ product }) {
  const { removeFromCart } = useProduct();
  return (
    <div
      key={product.id}
      className="w-[15vw] text-center h-[32vh] mr-[6px] shadow-2xl rounded-xl bg-stone-900 flex flex-col px-3 py-3 items-center justify-center gap-[30px]"
    >
      <h1 className="text-xl font-semibold">{product.tittle}</h1>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis
        aspernatur deleniti.
      </p>
      <button
        key={product.id}
        onClick={() => {
          removeFromCart(product.id);
        }}
        className="bg-stone-900 border-[1px] border-stone-100  text-stone-100 w-[3vw] h-[3vw] rounded-full flex items-center justify-center  "
      >
        <h1>🗑</h1>
      </button>
    </div>
  );
}

export default CartItem;
