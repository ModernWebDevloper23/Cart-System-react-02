import React, { useState } from "react";
import UpperBar from "./Components/UpperBar";
import Cart from "./Components/Cart";
import ProductHolder from "./Components/ProductHolder";
import { ProductContextProvider } from "./Context/productContext.js";

function App() {
  const [products, setProducts] = useState([]);
  const [selectedItems, updateSelectedItems] = useState([]);
  const [addedProducts, updateAddedProducts] = useState([]);

  const addProduct = (product) => {
    setProducts((prev) => {
      return [...prev, { id: Date.now(), ...product }];
    });
  };
  const toggleIsSelected = (id, selectedProduct) => {
    setProducts((prev) => {
      return prev.map((product) => {
        return product.id === id
          ? { ...selectedProduct, isSelected: !product.isSelected }
          : { ...product };
      });
    });
  };
  const addToCart = () => {
    const selectedProducts = products.filter((product) => product.isSelected);
    updateAddedProducts((prev) => [...prev, ...selectedProducts]);
  };

  const removeFromCart = (id) => {
    updateAddedProducts((prev) => {
      return prev.filter((product) => product.id !== id);
    });
  };

  const deleteProducts = (id) => {
    setProducts((prev) => {
      return prev.filter((product) => product.id !== id);
    });
    updateAddedProducts((prev) => {
      return prev.filter((product) => product.id !== id);
    });
  };
  return (
    <ProductContextProvider
      value={{
        products,
        selectedItems,
        addedProducts,
        addProduct,
        toggleIsSelected,
        addToCart,
        removeFromCart,
        deleteProducts,
      }}
    >
      <div className="w-full flex-wrap overflow-hidden h-[100vh] bg-stone-900 text-white flex gap-[30px] px-5 py-5">
        <UpperBar />
        <Cart />
        <ProductHolder />
      </div>
    </ProductContextProvider>
  );
}

export default App;
