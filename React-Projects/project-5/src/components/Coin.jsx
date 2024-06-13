import React, { useState } from 'react';
import '../Coin.css'; 
import headsImage from '../imgs/Heads.png'; 
import tailsImage from '../imgs/Tails.png'; 


const Toss = ['heads', 'tails'];

export default function Coin() {
  const [toss, setToss] = useState("");
  const [isTossing, setIsTossing] = useState(false);

  function tossCoin() {
    setIsTossing(true);

    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * Toss.length);
      setToss(Toss[randomIndex]);

      setIsTossing(false);
    }, 1000); 
  }

  return (
    <>
    <div className={`coin-container ${isTossing ? 'toss-animation' : ''}`}>
      <div className="coin">
        {toss === 'heads' ? <img src={headsImage} alt="Heads" /> : <img src={tailsImage} alt="Tails" />}
      </div>
    </div>
    <button onClick={tossCoin} disabled={isTossing}>
      {isTossing ? 'Flipping...' : 'Flip Coin'}
    </button>
    </>
  );
}
