import React,{useState} from 'react'
import './AddDetails.css';

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

    <div className='Container'>
  <input type='text' 
  placeholder='type something' 
  onChange={(e)=>setInput(e.target.value)}
  ></input>
   <button className='btn' type='button'  onClick={handleSubmit}>Add</button><br></br>
   {
     list.map((data)=>(
       
     <li
        >{data.input}</li>
     )
     
     )
    
   }
   
    </div>
  )
}

export default AddDetails