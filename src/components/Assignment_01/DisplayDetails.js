import React, { useState } from 'react'
import AddDetails from './AddDetails';

let buttonClicked = -1;
function DisplayDetails() {
  const [details,showDetails] = useState(false);
  
  const showParagraph = () =>{
    buttonClicked = buttonClicked + 1
    if(buttonClicked % 2 === 0){
   showDetails(true);
    }
    else{
        showDetails(false);
    }
    console.log(buttonClicked);
  }

  return (
    <div >
    
     
     <button type='button' onClick={showParagraph} style={
        {color:'white',fontSize:'30px',borderStyle:'none',backgroundColor:'blue', borderRadius:'2px',
        margin:'auto 500px'
    
    }

     }>Display Details</button>
     {details && <p
     style={{
        fontSize:'20px',
        color:'red'
     }}>
        A simple paragraph is comprised of three major components. The first sentence, which is often a declarative sentence, is called the “topic sentence.” It introduces the topic of the paragraph, setting its tone and mood. The next few sentences elaborate, explain, and exemplify the topic introduced in it.
    </p>}
    <AddDetails />
    </div>
  )
}

export default DisplayDetails