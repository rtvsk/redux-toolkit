import { configureStore } from "@reduxjs/toolkit";
import { logger } from "redux-logger";
import todoReducer from "./todoSlice";

export default configureStore({
    reducer: {
        todos: todoReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== "production",
});