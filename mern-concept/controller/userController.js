const model = require('../model/userModel.js')
const Users = model.Users


// Create Data Into The Database
exports.createUser = (req, res)=>{
    console.log(req.body)
    const user = new Users(req.body)
    user.save()
    .then(()=>{
        // res.status(201)
        res.status(201).json({message : 'User created successfully'})
    })
    .catch((err)=>console.log('Error in creating user'))
}

// Read Data From The Database
exports.getUsers =  async (req, res)=>{
    const user = await Users.find()
    res.json(user)
}


// Update Data Into The Database
exports.updateUser = async (req, res)=>{
    const id = req.params.id
    const user = await Users.findOneAndUpdate(
        {_id: id}, // Fillter
        req.body,  //Body. What To update
        {new: true} 
        )
    res.json({message: 'User Data updated successfully'})
    
}


// Delete Data Into The Database
exports.deleteUser = async(req, res)=>{
    const id = req.params.id
    const user = await Users.findOneAndDelete({_id:id})
    res.json({message: 'User Deleted Successfully'})
}