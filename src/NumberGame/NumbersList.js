import React, { useState } from "react";
import NumberItem from "./NumberItem";


const NumbersList = () => {
   const [numbers, setNumbers] = useState([2,5,6,12,762]);
   const remove = (num) => {
         setNumbers(numbers.filter(n => n !== num))
   }
   return (
      <ul>
         {numbers.map(n => (
            <NumberItem num={n} remove={remove} key={n}/>
         ))}
      </ul>
   )
}

export default NumbersList;