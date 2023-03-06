import { configureStore } from "@reduxjs/toolkit";
import formSliceReducer from "./slices/formSlice";

const store = configureStore({reducer:{
        formState: formSliceReducer 
}});

export default store;