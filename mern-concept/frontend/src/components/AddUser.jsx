
import React, { useState } from 'react'
import axios from 'axios'

function AddUser() {
  const [user, setUser] = useState({})

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]:e.target.value
  })
  }

  const handleSubmit = (event)=>{
    event.preventDefault();
    console.log(user);
    // addUser(user)
  }
  // const addUser = async (user) => {
  //   const res = await axios.post('http://localhost:8080/users', user)
  //   console.log(res.data)
  // }

  return (
    <>
<form onSubmit={()=>handleSubmit()}>
  <ul>
    <li>
      <label htmlFor="name">Name :</label>
      <input 
      type="text" 
      id="name" 
      name="user_name" 
      onChange={handleChange}
      />
    </li>
    <li>
      <label htmlFor="mail">Age : </label>
      <input 
      type="number" 
      id="mail" 
      name="age" 
      onChange={handleChange}
      />
    </li>
    <li>
      <label htmlFor="msg">Gender : </label>
      <input 
      type='text' 
      id="msg" 
      name="gender" 
      onChange={handleChange}
      />
    </li>
    
        <input type="submit" value={'Submit'} />
    
  </ul>
</form>


    </>
  )
}

export default AddUser