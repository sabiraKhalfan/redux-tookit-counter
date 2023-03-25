
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { increment ,decrement} from './Features/counterSlice';
function App (){

const {count1}=useSelector((state)=>state.counter)
console.log(count1)
const dispatch=useDispatch();
  return (
    <div className="App">
      <h1>Counter</h1>
      <h2>count1:{count1}</h2>
      
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default App;
