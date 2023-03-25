import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "../Features/counterSlice";
import formSlice from "../Features/formSlice";

 export const store=configureStore({
    reducer:{
        counter:counterSlice,
        form:formSlice
    }
   
})