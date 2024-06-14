import React, { useState } from 'react';

export default function Game() {
    const [game, setGame] = useState('rock');

    const nextChoice = () => {
        const choices = ['rock', 'paper', 'scissors'];
        const currentIndex = choices.indexOf(game);
        const nextIndex = (currentIndex + 1) % choices.length;
        setGame(choices[nextIndex]);
    };

    return (
        <>
            <h1>{game}</h1>
            <button onClick={nextChoice}>Next Choice</button>
        </>
    );
}
