require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const userRouter = require('./routes/userRouter.js')
const cors = require('cors');


// Database connection
mongoose.connect(process.env.DATABASE)
.then(()=>console.log('Database connection established'))
.catch((err)=>console.log('Error in connecting'))

const server = express();


// Middleware
server.use(cors());
server.use(express.json())
server.use('/users', userRouter.router)

server.listen(process.env.PORT, ()=>{
    console.log('Server Started')
})