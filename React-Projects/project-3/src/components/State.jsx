import React, { useState } from "react";

export default function State(){
    let [counter,useCounter] = useState(0);

    return (
        <>
            <h1>Counter : {counter}</h1>
            <button onClick={()=>{
                useCounter(counter+1)
            }}>Increment</button>
             <button onClick={()=>{
                useCounter(counter-1)
            }}>Decrement</button>
        </>
    );

}