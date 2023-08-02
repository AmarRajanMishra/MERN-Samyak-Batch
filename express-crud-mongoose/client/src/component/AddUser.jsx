import React, { useState } from 'react'
import axios from 'axios'

function AddUser() {
    const [name, setName] = useState('')

    const createUsers = async() => {
        try{
          const res = await axios.post('http://localhost:8080/users', {
            name, age, gender
          })
          console.log(res.data)
          
        } catch(err){
          console.log(err)
        }
    }
    const handleForm = ()=>{
        createUsers()
    }
  return (
    <div>
        <form action="" onSubmit={handleForm}>
            <input type="text" placeholder='Enter Name' name='name' />
            <input type="number" placeholder='Enter Age' name='age' />
            <input type="text" placeholder='Enter Gender' name='gender' />
            <input type="submit" value={'Add User'} />
        </form>
    </div>
  )
}

export default AddUser