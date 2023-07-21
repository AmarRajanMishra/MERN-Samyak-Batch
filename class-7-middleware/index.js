const express = require('express');
const morgan = require('morgan');


const server = express();

// To Access Static Files
server.use(express.static('public'))

// Body Parser
server.use(express.json())
server.use(morgan('default'))

// Custom Middleware || Application Level Middleware
// server.use((req, res, next)=>{
//     console.log("Method : ", req.method)
//     console.log("IP : ", req.ip)
//     console.log("Port : ", req.port)
//     console.log("Path : ", req.path)
//     console.log("HostName : ", req.hostname)
//     console.log("Date : ", new Date())
//     console.log(req.get('User-Agent'))
//     next();
// })

// Router Level Middleware
const auth = (req, res, next) =>{
    // // console.log(req.method)
    // console.log(req.query.password)
    // // next();
    // console.log(req.body)
    // if(req.query.password === "2819"){
    //     next();
    // }
    // else{
    //     console.log('You are not Autherized')
    // }


    if(req.body.password === 1234){
        next();
    }else{
        console.log('You are not Autherized')
    }
}


server.get('/', auth, (req, res)=>{
    res.send('Welcome To Home Page Section')
})

server.get('/about', (req, res)=>{
    res.send('Welcome To About Page')
})
server.get('/contact', (req, res)=>{
    res.send('Welcome To Contact Page')
})

server.post('/', (req, res)=>{
    res.send('POST request')
})


server.listen(8080)
// middleware