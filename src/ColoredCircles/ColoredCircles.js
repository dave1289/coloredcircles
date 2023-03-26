import React, {useState} from "react";
import Circle from "./Circles";
import ColorButtons from "./ColorButtons";

function getRandom(min = 0, max = 100) {
   return Math.random() * (max-min) + min;
}

const ColorCircle = () => {
   const [circles, setCircles] = useState([]) 
   const addCircle = (color) => {
      setCircles(circles => [...circles, {color, x: getRandom(), y: getRandom()}])
   }
   const changePosition = idx => {
      setCircles(circles => {
         const copy = [...circles];
         copy[idx].x = getRandom();
         copy[idx].y = getRandom();
         return copy;
      })
   }
   return (
      <>
      <ColorButtons options={['peachpuff', 'slateblue', 'green']} addCircle={addCircle} />
      {circles.map(({color, x, y}, idx) => (
      <Circle 
      color={color} 
      idx={idx} 
      key={idx} 
      x={x} 
      y={y} 
      changePosition={changePosition}
      />))}
      </>
   )
}

export default ColorCircle