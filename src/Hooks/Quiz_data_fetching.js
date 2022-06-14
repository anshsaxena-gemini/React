import React, { useEffect, useState } from 'react'
import axios from 'axios';

function Quiz_data_fetching() {
    const [posts,setPosts] = useState([]);
    // const [id,setId] = useState(1);
    useEffect(() => {
     fetch(`https://opentdb.com/api.php?amount=10&category=9`)
     .then(
        res => {
           res.json()
           .then( result =>{
             
              setPosts(result)
              console.log(result);
           }
           )
        }

     )
     .catch(err => {
        console.log(err);
     })
    },[]
    )
     
  return (
    <div>

   <h2>Quiz</h2>
   {posts.response_code.results}
    {/* <div>
        {
            posts.map(
                post => <div>{post}</div>
            )
        }
    </div> */}



    </div>
  )
}

export default Quiz_data_fetching