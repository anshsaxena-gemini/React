import React from 'react'
import {useReducer} from 'react';


const initialState = {
    firstCounter : 0,
    secondCounter : 0
}
const reducer = (state,action) =>{
    switch(action.type){
       case 'increment1':
        return {...state , firstCounter: state.firstCounter + action.value}

       case 'decrement1':
        return {...state , firstCounter: state.firstCounter - action.value}
       case 'increment5':
        return {...state , secondCounter: state.secondCounter + action.value}
       case 'decrement5':
        return {...state , secondCounter: state.secondCounter - action.value}
       case 'reset':
        return initialState;
       default:
        return state;
    }
}

function UseReducer2() {
   const [count,dispatch] = useReducer(reducer,initialState)
  return (
    <div>
    <div>
        CounterOne {count.firstCounter} <br></br>
        CounterTwo {count.secondCounter}
    </div>
    <button onClick={() => dispatch({type:'increment1' , value : 1 }) }>Increment-1</button>
    <button onClick={() => dispatch({type:'decrement1' , value : 1 }) }>Decrement-1</button>
    <button onClick={() => dispatch({type:'increment5' , value : 5 }) }>Increment-5</button>
    <button onClick={() => dispatch({type:'decrement5' , value : 5 }) }>Decrement-5</button>
    <button onClick={() => dispatch({type:'reset'}) }>Reset</button>
   
    </div>
  )
}

export default UseReducer2