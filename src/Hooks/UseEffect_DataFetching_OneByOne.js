import React, { useEffect, useState } from 'react'
import axios from 'axios';

function UseEffect_Data_Fetching_OneByOne() {
    const [post,setPost] = useState({});
    const [id,setId] = useState(1);
    useEffect(
    () => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`) //fetching data from API
        .then(
            res => {
                setPost(res.data);
            }
        )
        .catch( err =>{
            console.log(err)
        }
        )
    },[id]   // calling only once

    )
  return ( 
    <div>

    <input type="text" value={id} onChange={e => setId(e.target.value)} />
    <div>
        {post.title}
    </div>

    </div>
  )
    }


export default UseEffect_Data_Fetching_OneByOne