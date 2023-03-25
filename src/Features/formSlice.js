import { createSlice } from "@reduxjs/toolkit";


  const initialState={
    name:" ",
    age:0
}
const formSlice=createSlice({
    name:"form",
    initialState:initialState,


reducers:{
    submit:(state,actions)=>{
        
        state.name=actions.payload.name
        state.age=actions.payload.age
    }

}

})
export default formSlice.reducer;
export const {submit}=formSlice.actions