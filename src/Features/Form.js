
import React, { useState } from "react"
import { useDispatch } from "react-redux";
import {submit} from './formSlice';

const Form=()=>{
const dispatch=useDispatch();
    const [name,setName]=useState('');
    const [age,setAge]=useState(0)
    console.log(setAge)
    return(
            
        <div>
            <input type="text" placeholder="Enter Name" value={name} onChange={(e)=>setName(e.target.value)}/>
            <input type="text" placeholder="Enter Age" value={age} onChange={(e)=>setAge(e.target.value)}/>
            
            <button onClick={()=>dispatch(submit({name,age}))}>Submit</button>
        </div>
        
    )
}
export default Form;