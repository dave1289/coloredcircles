import React from "react";
import "./ColorButton.css"

const ColorButton = ({ color, addCircle}) => {
   return (
            <button
               onClick={() => addCircle(color)}
               className="ColorButton"
               style={{ backgroundColor: color }}>
               {color}
            </button>
   )
}

export default ColorButton