import React, { useState } from "react";
import './Form.css';


function Form(){


    const[formValues,setFormValues] = useState({}); // {} is a object
    const handleInputChange = (event) =>
    {
        const name = event.target.name;

        // console.log(formValues);
        const value = event.target.value;
       
        
       setFormValues({...formValues,[name]:value})
    //    console.log(formValues);

    };


//    const[firstname,setFirstName] = useState("");
//    const[lastname,setLastName] = useState("");
//    const[email,setEmail] = useState("");
//    const[gender,setGender] = useState("");
   
//    const handleFisrtNameChange = (event) => {
//        setFirstName(event.target.value);
//     //    console.log(firstname);
//    }
//    const handleLastNameChange = (event) => {
//     setLastName(event.target.value);

// }
// const handleEmailChange = (event) => {
//     setEmail(event.target.value);
//     console.log(email);

// }
// const genderChange = (event) => {
//     setGender(event.target.value);
//     // console.log(gender);

// }
const handleSubmit = (event) => {
   alert("Welcome "+formValues.firstname);
   

}
  
   return(

    
    <div className="App">
        <form action="index.html" method="post">
            <div>
            <h1 id="head">Register Now</h1>
            </div>
            <input type="text"
            name="firstname"
            value={formValues.firstname}
            onChange={handleInputChange}
            placeholder="Enter Your Name"
            ></input><br></br>
             <input type="text"
             name="lastname"
            value={formValues.lastname}
            onChange={handleInputChange}
            placeholder="Enter Your Last Name"
            ></input><br></br>
             <input type="email"
             name="email"
            value={formValues.email}
            onChange={handleInputChange}
            placeholder="Enter Your Email"
            ></input> <br>
            </br>
            <label>Gender : </label>
            <input type="radio"
            value={formValues.gender}
            name="gender"
            onChange={handleInputChange}
            ></input><label>Male</label>
            <input type="radio"
            name="gender"
            value={formValues.gender}
            onChange={handleInputChange}
            ></input><label>Female</label><br></br>
            <div>
                <button onClick={handleSubmit}>Submit</button>
            </div>
      
    
          
           
        </form>
    </div>
   )
  

}
export default Form;