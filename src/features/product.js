import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProducts = createAsyncThunk("getProducts", async () => {
    const products = await axios.get("http://localhost:9000/product");
    // console.log(products);
   return products.data;
});

const initialState = {
    isLoading: true,
    products: []
}
const productSlice = createSlice({
    name: "product",
    initialState,
    extraReducers: {
        [getProducts.pending]: (state) => {
            state.isLoading = true;
        },
        [getProducts.fulfilled]: (state, action) => {
            state.isLoading = false;
            state.products = action.payload;
        },
        [getProducts.rejected]: (state) => {
            state.isLoading = true;
        }
    }
});

export default productSlice.reducer;