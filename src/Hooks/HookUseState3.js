import React, { useState } from 'react'

function HookUseState3() {
    const [items,setItems] = useState([]);

    const addItems = () => {
        setItems([
          ...items,{  // adding new object of values with previous items
          id : items.length,
          value : Math.floor(Math.random() * 10) + 1
          }]
        )
    }
  return (
    <div>
     <button onClick={addItems}>Add</button>
     <ul>
     {items.map(item => ( // for storing the array

        <li>{item.value}</li>
     ))}

    </ul>
    </div>
  )
}

export default HookUseState3