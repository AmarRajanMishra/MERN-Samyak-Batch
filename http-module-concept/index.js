const http = require('http')



const server = http.createServer((req, res)=>{
        console.log('Server is created')
        // res.setHeader('Demo', 'demoValue')
        res.setHeader('Content-Type', 'text/html')
        res.end('<h1>Welcome Node Js Server Class</h1>')
})

server.listen(8000)