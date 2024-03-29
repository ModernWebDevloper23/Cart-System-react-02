import { createContext, useContext } from 'react';

const ProductContext = createContext({
    products: [],
    selectedItems: [],
    addedProducts: [],
    addProducts: (product) => { },
    addToCart: (selectedItems) => { },
    removeFromCart: (id) => { },
    deleteProducts: (id) => { },
    editProductTittle: (id, tittle) => { },
    editProductDesc: (id, desc) => { },
    selectProduct: (id) => { } ,
    toggleIsSelected: (isSelceted,id)=>{}
})

const useProduct = () => {
    return useContext(ProductContext)
}

const ProductContextProvider = ProductContext.Provider;

export  { ProductContext, ProductContextProvider, useProduct };