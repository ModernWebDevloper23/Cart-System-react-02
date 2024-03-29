import React, { useRef } from "react";
import { useProduct } from "../Context/productContext";

function UpperBar() {
  const { addProduct } = useProduct();
  const inputRef = useRef();

  return (
    <div className="w-[61vw] h-[15vh] bg-stone-800 rounded-3xl flex items-center gap-[20px] justify-center px-4 py-4">
      <input
        ref={inputRef}
        type="text"
        placeholder="Enter your product"
        className="w-[30vw] h-[6vh] border-[1px] border-stone-100 flex items-center justify-center px-4 rounded-[10px] bg-transparent"
      />
      <button
        onClick={() => {
          {
            inputRef.current.value === ""
              ? alert("plz add tittle")
              : addProduct({
                  tittle: inputRef.current.value,
                  isSelected: false,
                });
          }
          inputRef.current.value = "";
        }}
        className="px-6 py-3 rounded-[60px] bg-stone-300 text-stone-900 border-[1px] border-stone-900"
      >
        Add Product
      </button>
    </div>
  );
}

export default UpperBar;
