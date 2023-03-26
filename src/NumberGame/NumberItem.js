import React from "react";

const NumberItem = ({num, remove}) => {
   const handleRemove = () => {
      remove(num)
   }
   return (
         <li id={num}>
            <button onClick={handleRemove}>{num}</button>
         </li>
   )
}


export default NumberItem