import React, {useState} from "react"

const NumberGame = () => {
   const genRandom = () => Math.floor(Math.random() * 10) + 1;
   const restart = () => {
      setTarget(genRandom())
      setGuess(0)
      setGuessCount(0)
   }
   const makeGuess = () => {
      setGuess(genRandom());
      setGuessCount(guessCount + 1);
   }
   const [guess, setGuess] = useState(genRandom())
   const [target, setTarget] = useState(genRandom())
   const [guessCount, setGuessCount] = useState(0)
   return (
      <div>
         <h1>Target Num: {target}</h1>
         <h1 style={{color: target === guess ? 'green' : 'red'}}>Your Guess is: {guess} </h1>
         <sub>Guess #{guessCount}</sub>
         <br></br>
         <button style={{display: target === guess ? 'none' : 'inline'}}onClick={() => makeGuess()}>Generate Num</button>
         <button onClick={restart}>Restart</button>
      </div>
   )
}

export default NumberGame