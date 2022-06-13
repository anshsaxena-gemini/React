import React, { useState } from 'react'

function HookUseState1() {
const initialValue = 0;
  const [count,setCount] = useState(initialValue);
  return (
    <div>
    <button onClick={()=>setCount(count+1)}>Increment</button>
    <button onClick={()=>setCount(count-1)}>Decrement</button>
    <button onClick={()=>setCount(initialValue)}>Reset</button>
    <br></br>
    <h1> {count}</h1>


    </div>
  )
}

export default HookUseState1