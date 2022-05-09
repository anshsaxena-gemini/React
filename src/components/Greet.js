import React from "react";

// function Greet(){
//     return <h1>Hello Ansh</h1>
// }
const Greet = (props) =>  {
    return (
        <div><h1>Hello {props.name} {props.age} </h1>
    <h3>{props.children} </h3>
    </div>
    )
}

export default Greet;