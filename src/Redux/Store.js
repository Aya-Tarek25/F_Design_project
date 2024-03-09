import { configureStore } from "@reduxjs/toolkit";
import projectReducer from "./Slices/projectSlice";
import  portfolioReducer from "./Slices/portfolioSlice";

export const Store = configureStore({
    reducer: {
       
        projectReducer,
        portfolioReducer

    }
});