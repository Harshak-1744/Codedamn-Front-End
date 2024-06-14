import React, {useState} from 'react';


export default function () {

    const [game, setGame] = useState('rock');

    return <>
        <h1>{game}</h1>
        <button onClick={() => {
            setGame(game)
        }}>Click Me</button>
    </>
}