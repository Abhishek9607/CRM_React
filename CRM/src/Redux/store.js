import { configureStore } from "@reduxjs/toolkit";

import AuthSliceReducer from "../Redux/Slices/AuthSlice";
const store = configureStore({
    reducer: {
        auth: AuthSliceReducer
    },
    devTools: true
});

export default store;