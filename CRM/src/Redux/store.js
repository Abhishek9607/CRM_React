import { configureStore } from "@reduxjs/toolkit";

import AuthSliceReducer from "../Redux/Slices/AuthSlice";
import ticketSliceReducer from '../Redux/Slices/TicketSlice';
const store = configureStore({
    reducer: {
        auth: AuthSliceReducer,
        tickets: ticketSliceReducer
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck: false}),
    devTools: true
});

export default store;