const fs = require('fs');

const data = JSON.parse(fs.readFileSync('db.json', 'utf-8'))
// const data = JSON.parse(users)
// console.log(userData.users)
const users = data.users



// Controller Function

exports.getUsers = (req, res)=>{
    res.json(users)
}

exports.getSingleUser = (req, res)=>{
    // console.log(req.params.id)
    const id = req.params.id;
    const user = users.find((user)=>{
        return (user.id == id)
    })
    res.json(user)
}

exports.createUser =  (req, res)=>{
    // console.log(req.body)
    users.push(req.body)
    res.status(201).json(req.body)
}

exports.updateUser =  (req, res)=>{
    const id = req.params.id;
    const userIndex = users.findIndex((user)=>{
        return user.id == id
    })
    users.splice(userIndex, 1, {...req.body, id:id})
    res.status(201).json('Updated')
}

exports.deleteUser =  (req, res)=>{
    const id = req.params.id
    const userIndex = users.findIndex((user)=>{
        return user.id == id
    })
    users.splice(userIndex,1)
    res.json('Data deleted Successfully')
}
