import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isOpen : false
}

const searchSlice = createSlice({
    name: "search",
    initialState,
    reducers: {
        open: (state) => {
            state.isOpen = true
        },
        close: (state) => {
            state.isOpen = false
        }
    }
});

export default searchSlice.reducer;
export const { open, close } = searchSlice.actions;