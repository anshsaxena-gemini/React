import React,{useState} from 'react'
import styles from './AddDetails.module.css';

function AddDetails() {
    const [input,setInput] = useState("");
    const [list,setList] = useState([]);
    const [error,setError] = useState(false);
    
  
    const handleSubmit = () =>{
       
        const data = {input}
        // 
        if(input.trim().length === 0){
          setError(true);
        }
        else{
          setError(false)
        setList((ls) =>
            [
             ...ls,data
            
            ]
        )
          }
       
    }
   
  return (

    <div className={styles.Container}>
  <input 
  className={`${styles.userInput} ${error ? styles.invalid : ''}`}
  type='text' 
  placeholder='type something' 
  onChange={(e)=>setInput(e.target.value)}
  ></input>
   <button className={styles.btn} type='button' onClick={handleSubmit}>Add</button><br></br>
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