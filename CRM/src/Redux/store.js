import { configureStore } from "@reduxjs/toolkit";

import AuthSliceReducer from "../Redux/Slices/AuthSlice";
const store = configureStore({
    reducer: {
        auth: AuthSliceReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
    devTools: true
});

export default store;