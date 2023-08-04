require('dotenv').config()
const express = require('express');
const cors = require('cors');
const connectDB = require('./config/configdb.js')
const authRouter = require('./routes/authRouter.js')
const auth = require('./middleware/authMiddleware.js')


// Database Configuration
connectDB();

const server = express();


// Middleware
server.use(cors())
server.use(express.json())
server.use('/auth', authRouter.router)

server.get('/users', auth, (req, res)=>{
    res.json({Message : "Authenticated User Data"})
})

server.listen(process.env.PORT, ()=>{
    console.log('Server Started')
})