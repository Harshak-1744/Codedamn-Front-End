import React, { useState } from "react";
import '../App.css';

const quotes = [
    "\"The only limit to our realization of tomorrow will be our doubts of today.\" - Franklin D. Roosevelt",
    "\"What you get by achieving your goals is not as important as what you become by achieving your goals.\" - Zig Ziglar",
    "\"It is never too late to be what you might have been.\" - George Eliot",
    "\"You must be the change you wish to see in the world.\" - Mahatma Gandhi",
    "\"Believe you can and you're halfway there.\" - Theodore Roosevelt",
    "\"I have not failed. I've just found 10,000 ways that won't work.\" - Thomas Edison",
    "\"Success is not the key to happiness. Happiness is the key to success. If you love what you are doing, you will be successful.\" - Albert Schweitzer",
    "\"Everything you’ve ever wanted is on the other side of fear.\" - George Addair",
    "\"Opportunities don't happen, you create them.\" - Chris Grosser",
    "\"Start where you are. Use what you have. Do what you can.\" - Arthur Ashe"
];

export default function Quotes() {
    const [quote, setQuoteState] = useState(quotes[0]); 

    function changeQuote() {
        const randomIndex = Math.floor(Math.random() * quotes.length); 
        const randomQuote = quotes[randomIndex]; 
        setQuoteState(randomQuote); 
    }

    return (
        <>
            <div>{quote}</div>
            <button onClick={changeQuote}>Click Me</button>
        </>
    );
}
