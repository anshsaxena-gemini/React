import React from 'react'


function ShowExpenses(props) {

  return (
    <div>
      
      <h2>{props.title}</h2> 
      <h2>{props.amount}</h2>
      <h2>{props.date}</h2> 

    </div>
  )
}

export default ShowExpenses