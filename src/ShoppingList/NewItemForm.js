import React, { useState } from "react";
import "./NewItemForm.css"

const NewItemForm = ({ addItem }) => {
   const INITIAL_STATE = {
      name: "",
      qty: "",
   }
   const [formData, setFormData] = useState(INITIAL_STATE)
   const handleChange = e => {
      const { name, value } = e.target
      setFormData(data => ({
         ...data,
         [name]: value
      }))
   }
   const handleSubmit = (e) => {
      e.preventDefault();
      addItem({...formData})
      setFormData(INITIAL_STATE)
   }
   return (
      <form className="NewItemForm text-center" onSubmit={handleSubmit}>
         <label htmlFor="name">Product Name:</label>
         <input
            placeholder="product name"
            className="NewItemForm-name"
            name="name"
            id="name"
            value={formData.name}
            onChange={handleChange}></input>
         <label htmlFor="qty">Quantity: {formData.qty} </label>
         <input
            className="NewItemForm-qty"
            type="range" min="1" max="10"
            id="qty"
            name="qty"
            onChange={handleChange}
            value={formData.qty}
            />
         <button className="NewItemForm-button btn btn-primary">Add Item</button>
      </form>
   )
}


export default NewItemForm