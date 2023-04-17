import React, { useState } from "react";
import "./UserForm.css"

const UserForm = () => {
   const initialState = {
      username: "",
      email: "",
      password: ""
   }
   const [formData, setFormData] = useState(initialState)
   const handleChange = e => {
      const { name, value } = e.target;
      setFormData(data => ({
         ...data,
         [name]: value
      }))
   }
   const handleSubmit = (e) => {
      const { username, email, password } = formData
      alert(`Created user with username ${username}, email ${email}, ${password}`)
      setFormData(initialState)
   }
   return (
      <form className="UserForm text-center" onSubmit={handleSubmit}>
         <label htmlFor="username">Username: </label>
         <input
            placeholder="username" className="UserForm-Input"
            name="username"
            id="username"
            value={formData.username}
            onChange={handleChange}></input>
         <label htmlFor="email">Email:</label>
         <input
            type="text"
            id="email"
            name="email"
            onChange={handleChange}
            value={formData.email}
            placeholder="email" />
         <label htmlFor="password">Password</label>
         <input type="password"
            name="password"
            id="password"
            onChange={handleChange} />
         <button className="btn btn-primary">Slip Slop Slap</button>
      </form>
   )
}


export default UserForm