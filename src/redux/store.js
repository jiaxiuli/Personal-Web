import generalReducer from "./slice/generalSlice";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
    reducer: {
        general: generalReducer
    },
    middleware: (getDefaultMiddleware) => 
        getDefaultMiddleware({serializableCheck: false})
});