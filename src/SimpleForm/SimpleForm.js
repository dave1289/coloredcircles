import React, { useState } from "react";
import "./SimpleForm.css"

const SimpleForm = () => {
   const initialState = {
      email: ""
   }
   const [formData, setFormData] = useState(initialState)
   const [isInvalid, setIsInvalid] = useState(true)
   const [isTouched, setIsTouched] = useState(false)
   const handleChange = e => {
      setIsTouched(true)
      const { name, value } = e.target;
      if (value === '') {
         setIsInvalid(true)
      } else {
         setIsInvalid(false)
      }
      setFormData(data => ({
         ...data,
         [name]: value
      }))
   }
   const handleSubmit = (e) => {
      e.preventDefault();
      const { email } = formData;
      if(!isInvalid) {
         alert(`Added ${email} to list`)
         setFormData(initialState)
      }
   }
   return (
      <form className="simpleform" onSubmit={handleSubmit}>
         <label htmlFor="email">Email:</label>
         <input
            type="text"
            id="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            placeholder="email" />
         {isInvalid && isTouched && <span style={{ color: 'red' }}>Email cannot be blank</span>}
         <button className="btn btn-primary">Add me!</button>
      </form>
   )
}


export default SimpleForm