import React, { useState } from "react";

export default function State() {

    const [counter, setCounter] = useState(0);

    return (
        <>       
            <h1>Counter: {counter}</h1>
            <button onClick={() => setCounter(counter + 1)}>Increment</button>
            <button onClick={() => setCounter(counter - 1)}>Decrement</button>
        </>
    );
}
