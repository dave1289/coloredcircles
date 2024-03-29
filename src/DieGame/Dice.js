import React, { useState } from "react";
import Die from "./Die";
import './Dice.css'

const Dice = ({ numDice = 6, title = 'Main Game', maxVal = 20 }) => {
   const [numbers, setNumbers] = useState(Array.from({ length: numDice }));
   const rollDice = (arr) => (setNumbers(numbers => numbers.map(n => Math.floor(Math.random() * maxVal + 1))))
   // const dice = [];
   // for (let i = 0; i < numDice; i++) {
   //    const num = Math.floor(Math.random() * maxVal + 1)
   //    dice.push(num)
   // }
   return (
      <div className='Dice card-body'>
         <h1 className="display-1">{title}</h1>
         <div>
         {numbers.map(num => <Die val={num} />)}
         </div>
         <button onClick={rollDice}>Roll</button>
      </div>
   )
}

export default Dice