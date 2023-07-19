const http = require('http')
const fs = require('fs')


// const dataJson = fs.readFileSync('data.json', 'utf-8')
// console.log(dataJson) // json
// const data = JSON.parse(dataJson) // JSOn to Object
// console.log(data) //object

// hello
// const obj = {
//     name : 'Ajay',
//     age : 36,
//     gender : 'Male'
// }
// console.log(obj.age)
// const data = JSON.stringify(obj) // Object to Json
// console.log(data.name)






const server = http.createServer((req, res)=>{
    
    if(req.url === '/'){
        res.write('<h1>Welcome to Home Page</h1>')
        res.end()
    }
    else if(req.url === '/about'){
        res.end('<h1>Welcome to About Us Page</h1>')
    }else if(req.url === '/contact'){
        res.end('<h1>Welcome to Contact Page</h1>')
    }else if(req.url === '/usersapi'){
        fs.readFile('data.json', 'utf8', (err, data)=>{
            res.end(data)
        })
    }
    else{
        res.writeHead(404)
        res.end('<h1>404, Page Not Found</h1>')
    }
    
})

server.listen(8080, ()=>{
    console.log('Server Started')
})


// const obj = {
//     name : 'Ajay',
//     Age : 20
// }

// console.log(obj.name)