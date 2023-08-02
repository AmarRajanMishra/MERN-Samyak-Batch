import React, { useEffect, useState } from 'react'
import axios from 'axios'

function UserList() {
    const [users, setUser] = useState([])

    // http://localhost:8080/users
    // To Get Data From The Database
    // const getUsers = () => {
    //     axios.get('http://localhost:8080/users')
    //     .then((res) => console.log(res.data))
    // }

    const getUsers = async() => {
      try{
        const res = await axios.get('http://localhost:8080/users')
        console.log(res.data)
        setUser(res.data)
      } catch(err){
        console.log(err)
      }
  }

    useEffect(()=>{
        getUsers();
    }, [])
  return (
    <div>
        <h1>Users Details</h1>
        <div>
          {
            users.map((user)=>{
              return(
                <div key={user._id}>
                    <h1>Name : {user.name}</h1>
                    <h1>Age : {user.age}</h1>
                    <h1>Gender : {user.gender}</h1>
                </div>
              )
            })
          }
        </div>
    </div>
  )
}

export default UserList