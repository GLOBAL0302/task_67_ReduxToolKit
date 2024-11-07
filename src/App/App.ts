import {configureStore} from "@reduxjs/toolkit";
import {checkerReducer} from "../Container/Checker/CheckerSlice.ts";

export const store = configureStore({
    reducer:{
        checker: checkerReducer,
    }
});

export  type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

