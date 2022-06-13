import React, { useEffect, useState } from 'react'

function HookUseEffect1() {
const initialValue = 0;
  const [count,setCount] = useState(initialValue);

  useEffect( () =>
    { 
        document.title = `you clicked ${count} times`;
    },[count] // only re-render when counter value changes

    // if we want to run useEffect only once then use -->
    // useEffect( () =>
    // {
    //     document.title = `you clicked ${count} times`;
    // },[]  
  )
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

export default HookUseEffect1