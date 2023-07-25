const express = require('express');
const userRouter = require('./routes/userRouter.js')
const server = express();


// Body Parser
server.use(express.json())
server.use('/users/api/v1/', userRouter.router)


server.listen(8080, ()=>{
    console.log('Server Started at 8080')
});


