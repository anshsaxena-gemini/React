import React, { useState } from 'react'

function HookUseState2() {
    const [input,setInput] = useState({firstName:'',lastName:''})
  return (
    <div>
    <input type="text" value={input.firstName} onChange={e=>setInput({...input ,firstName : e.target.value})}></input><br></br>
    <input type="text" value={input.lastName} onChange={e=>setInput({...input, lastName : e.target.value})}></input><br></br>
    
   <h3>Your firstName is : {input.firstName}</h3>
   <h3>Your lastName is : {input.lastName}</h3>
   <h3>{JSON.stringify(input)}</h3>


    </div>
  )
}

export default HookUseState2