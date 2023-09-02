import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    role: localStorage.getItem("role") || "",
    data: localStorage.getItem("data")  || {},
    isLoggedIn: localStorage.getItem("isloggedIn") || false
}

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {}
});

export default authSlice.reducer;