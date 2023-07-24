const express = require('express');
const fs = require('fs');

const data = JSON.parse(fs.readFileSync('db.json', 'utf-8'))
// const data = JSON.parse(users)
// console.log(userData.users)
const users = data.users

const server = express();


// Body Parser
server.use(express.json())


server.get('/users', (req, res)=>{
    res.json(users)
})


server.get('/users/:id', (req, res)=>{
    // console.log(req.params.id)
    const id = req.params.id;
    const user = users.find((user)=>{
        return (user.id == id)
    })
    res.json(user)
})

server.post('/users', (req, res)=>{
        // console.log(req.body)
        users.push(req.body)
        res.status(201).json(req.body)
})

server.put('/users/:id', (req, res)=>{
    const id = req.params.id;
    const userIndex = users.findIndex((user)=>{
        return user.id == id
    })
    users.splice(userIndex, 1, {...req.body, id:id})
    res.status(201).json('Updated')
})

server.delete('/users/:id', (req, res)=>{
    const id = req.params.id
    const userIndex = users.findIndex((user)=>{
        return user.id == id
    })
    users.splice(userIndex,1)
    res.json('Data deleted Successfully')
})


server.listen(8080, ()=>{
    console.log('Server Started at 8080')
});