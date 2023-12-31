import React, { useEffect, useState } from 'react'
import axios from 'axios'

function UserList() {
  const [user, setUser] = useState([])

  const getUser = async () =>{
    const res = await axios.get('http://localhost:8080/users')
    console.log(res)
  }
  useEffect(()=>{
    getUser()
  },[])
  return (
    <div>
        <div className="card">
    <img src="img_avatar.png" alt="Avatar" style={{width: '100%'}} />
    <div className="container">
    <h4><b>John Doe</b></h4> 
    <p>Architect &amp; Engineer</p> 
  </div>
</div>

    </div>
  )
}

export default UserList