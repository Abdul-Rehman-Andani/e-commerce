import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    signin: true,
    signout: false,
    role: false
}

const navSlice = createSlice({
    name: "navbar",
    initialState,
    reducers: {
        signIn: (state) => {
            state.signin = false;
            state.signout = true
        },
        signOut: (state) => {
            state.signin = true;
            state.signout = false;
        },
        user : (state) => {
            state.role = false;
        },
        admin: (state) => {
            state.role = true;
        }
    }

});

export default navSlice.reducer;
export const { signIn, signOut , admin, user} = navSlice.actions;