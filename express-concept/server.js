require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')

// Connect To The Database

mongoose.connect(process.env.DATABASE)
.then(()=>{
    console.log('Connection Successfull')
})
.catch((err)=> console.log('No connected'))

// console.log(`Port is ${process.env.PORT}`)


const server = express()

server.get('/', (req, res)=>{
    res.send('Welcome to the Server')
})

server.listen(process.env.PORT, ()=>{
    console.log('Server is started')
})