import React, { useState } from 'react';

export default function Game() {
    const [userChoice, setUserChoice] = useState(null);
    const [computerChoice, setComputerChoice] = useState(null);
    const [result, setResult] = useState('');
    const [userScore, setUserScore] = useState(0);
    const [computerScore, setComputerScore] = useState(0);

    const choices = ['rock', 'paper', 'scissors'];

    const handleUserChoice = (choice) => {
        setUserChoice(choice);
        const computerChoice = choices[Math.floor(Math.random() * choices.length)];
        setComputerChoice(computerChoice);
        determineWinner(choice, computerChoice);
    };

    const determineWinner = (userChoice, computerChoice) => {
        if (userChoice === computerChoice) {
            setResult('It\'s a tie!');
        } else if (
            (userChoice === 'rock' && computerChoice === 'scissors') ||
            (userChoice === 'paper' && computerChoice === 'rock') ||
            (userChoice === 'scissors' && computerChoice === 'paper')
        ) {
            setResult('You win!');
            setUserScore(userScore + 1);
        } else {
            setResult('You lose!');
            setComputerScore(computerScore + 1);
        }
    };

    return (
        <div className="App-header">
            <h1>Rock Paper Scissors</h1>
            <div className="score-board">
                <div className="score">
                    <h2>User Score: {userScore}</h2>
                </div>
                <div className="game">
                    <div>
                        <button className="App-button" onClick={() => handleUserChoice('rock')}>Rock</button>
                        <button className="App-button" onClick={() => handleUserChoice('paper')}>Paper</button>
                        <button className="App-button" onClick={() => handleUserChoice('scissors')}>Scissors</button>
                    </div>
                    <div>
                        <h2>Your choice: {userChoice}</h2>
                        <h2>Computer's choice: {computerChoice}</h2>
                        <h2>{result}</h2>
                    </div>
                </div>
                <div className="score">
                    <h2>Computer Score: {computerScore}</h2>
                </div>
            </div>
        </div>
    );
}
