import React from "react";
import "./Circle.css"


const Circle = ({color, idx, x, y, changePosition}) => {
   return (
      <div className="Circle"
      style={{
         backgroundColor: color,
         position: 'absolute',
         top: `${y}vh`,
         left: `${x}vw`}}
      onMouseOver={() => changePosition(idx)}>
         {idx + 1}
      </div>
   )
}

export default Circle;