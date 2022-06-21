import React,{useState} from 'react'

function AddDetails() {
    const [input,setInput] = useState("");
    const [list,setList] = useState([]);

    const handleSubmit = () =>{
    
        const data = {input}
        setList((ls) =>
            [
             ...ls,data
            
            ]
        )
        setInput("")
    }
   
  return (

    <div >
  <input type='text' 
  placeholder='type something' 
  name="conetnt" 
  onChange={(e)=>setInput(e.target.value)}
  ></input>
   <button type='button' onClick={handleSubmit}>Add</button><br></br>
   {
    
     list.map((data)=>(
         <li>{data.input}</li>
     ))
    
   }
   
    </div>
  )
}

export default AddDetails