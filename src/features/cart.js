import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  cartItem: 0,
  status: "",
};

export const countItem = createAsyncThunk("countItem", async () => {
  const res = await axios.get(
    `http://localhost:9000/cart/${localStorage.getItem("userId")}`
  );
  return res.data.count;
});

const cartSlice = createSlice({
  name: "cart",
  initialState,
  extraReducers: {
    [countItem.pending]: (state) => {
      state.status = "pending";
    },
    [countItem.fulfilled]: (state, action) => {
      state.cartItem = action.payload;
    },
    [countItem.rejected]: (state) => {
      state.status = "rejected";
    },
  },
});

export default cartSlice.reducer;
