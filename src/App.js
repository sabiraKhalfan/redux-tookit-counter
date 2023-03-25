
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import Form from './Features/Form'
import { increment ,decrement,incrementBy5} from './Features/counterSlice';
function App (){


const {count1,count2}=useSelector((state)=>state.counter);
const {name,age}=useSelector(state=>state.form)

const dispatch=useDispatch();
  return (
    <div className="App">
      <h1>Counter</h1>
      <h2>count1:{count1}</h2>
      <h2>count2:{count2}</h2>
      
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
      <button onClick={()=>dispatch(incrementBy5())}>IncrementBy5</button>
      
      <Form />
      <br />

      <h2>name:{name}</h2>
      <h2>age:{age}</h2>


    </div>
  )
}

export default App;
