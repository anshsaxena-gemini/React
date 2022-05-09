import React from "react";

import { useState,useEffect } from "react";

function UseStates(){
   const[count,Increment] = useState(0);
   
   // const[data,Decrement] = useState(100);

  
   useEffect(() => {
   //   document.getElementById('name').innerHTML = "<h1>Gemini</h1>"
   alert("count is" + count)
   }
   )
   return(
      <div>
         <h1 id="name">Counter {count} </h1>
         <button onClick={()=> Increment(count+1)}>Increment</button>
         <button onClick={()=>Increment (count-1)}>Decrement</button>
      

      </div>
   )
}



export default UseStates;