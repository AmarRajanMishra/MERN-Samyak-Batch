const express = require('express')

const server = express()
// server.get(route, callback)

server.get('/', (req, res)=>{
    // res.status(200)
    // res.sendStatus(200)
    // res.send('GET Request')
    res.sendFile('/Users/shrutiagarwal/Desktop/MERN-Samyak-Class/class-6-express-server/public/index.html')
})

server.get('/about', (req, res)=>{
    res.sendFile('/Users/shrutiagarwal/Desktop/MERN-Samyak-Class/class-6-express-server/public/about.html')
})

server.post('/', (req, res)=>{
    // res.send('POST request')
    res.json({ type: 'POST Request' })
})

server.put('/', (req, res)=>{
    res.send('PUT request')
})

server.delete('/', (req, res)=>{
    res.send('DELETE request')
})

server.get('/contact', (req, res)=>{
    // res.send('Welcome to Contact Page')
    res.sendFile('/Users/shrutiagarwal/Desktop/MERN-Samyak-Class/class-6-express-server/public/contact.html')
})


server.listen(8000)


// API
// GET = Read
// POST = Create
// PUT = Update
// DELETE = Delete
// PATCH = Update