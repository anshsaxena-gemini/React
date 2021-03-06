import axios from 'axios'
import React, { useEffect, useReducer } from 'react'


const initialState = {
    posts : {},
    loading : false,
    error : ""
}
const reducer = (state,action) => {
     switch(action.type){
        case 'FETCH_SUCCESS':
            return {
                loading : false,
                posts : action.payload,
                error : ""
            }
        case 'FETCH_ERROR':
            return{
                loading : false,
                posts : "",
                error : "Something went Wrong !"
            }
        default :
            return state;
     }
        
}
function DataFetching_UseReducer() {
 
    const [state,dispatch] = useReducer(reducer,initialState)

    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/2`)
        .then(res => {
            dispatch({type:'FETCH_SUCCESS',payload:res.data})
        })
        .catch(error =>{
            dispatch({type:'FETCH_ERROR'})
        })
    },[])


  return (
    <div>
     {state.loading ? 'Loading' : state.posts.title}
     {state.error ? state.error : null}


    </div>
  )
}

export default DataFetching_UseReducer