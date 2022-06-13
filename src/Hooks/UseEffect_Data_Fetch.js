import React, { useEffect, useState } from 'react'
import axios from 'axios';

function UseEffect_Data_Fetch() {
    const [posts,setPosts] = useState([]);
    useEffect(
    () => {
        axios.get("https://jsonplaceholder.typicode.com/posts") //fetching data from API
        .then(
            res => {
                setPosts(res.data);
            }
        )
        .catch(
            console.log()
        )
    },[]   // calling only once

    )
  return (
    <div>

     <ul>
        {
            posts.map(
             post => <li key={post.id}>{post.title}</li>

            )
        }
     </ul>


    </div>
  )
}

export default UseEffect_Data_Fetch