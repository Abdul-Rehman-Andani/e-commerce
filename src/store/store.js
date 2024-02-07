import { configureStore } from "@reduxjs/toolkit";
import searchSlice from "../features/search-bar";
import productSlice from "../features/product";
import navSllice from "../features/navbar";
import cartSlice from "../features/cart";

const store = configureStore({
    reducer: {
        search: searchSlice,
        product: productSlice,
        navbar: navSllice,
        cart : cartSlice
    }
});


export default store;