import { createSlice } from "@reduxjs/toolkit";
const initialState={
    count1 :0,
    count2:10
    
}
const counterSlice=createSlice({
    name:"counter",
    initialState:initialState,

    reducers:{
        increment:(state)=>{
            state.count1=state.count1+1;
            
        },
        decrement:(state)=>{
        state.count1=state.count1-1;
        },
        incrementBy5:(state)=>{
            state.count2=state.count2+5;
        }

    }
})

export default counterSlice.reducer;
export const {increment,decrement,incrementBy5}=counterSlice.actions;
    
       

    
