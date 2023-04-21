import React, { useState, useEffect } from "react";

const Timer = () => {
   const [seconds, setSeconds] = useState(0);
   useEffect(() => {
      const timerInt = setInterval(() => {
         setSeconds(seconds => seconds + 1)
      }, 1000)
      return () => clearInterval(timerInt)
   }, [])
   return <h1>{seconds}</h1>
}

export default Timer;